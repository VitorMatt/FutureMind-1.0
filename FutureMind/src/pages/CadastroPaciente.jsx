import '../pages/CSS/CadastroProfissional.css';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroPaciente1 from '../components/CadastroPaciente1';
import CadastroPaciente2 from '../components/CadastroPaciente2';
import CadastroPaciente3 from '../components/CadastroPaciente3';
import Stepper from '../components/StepperComponent';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CadastroPaciente() {
  const navigate = useNavigate();
  const { paciente, setPaciente } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Função para validar e-mail e senha
  const validateEmailAndPassword = () => {
    const validationErrors = {};

    if (!paciente.email || !paciente.email.includes('@')) {
      validationErrors.email = "E-mail inválido.";
    }

    if (!paciente.senha || paciente.senha.length < 8 || paciente.senha.length > 10) {
      validationErrors.senha = "A senha deve ter entre 8 e 10 caracteres.";
    }

    if (!termosAceitos) {
      validationErrors.termos = "Você precisa aceitar os termos.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }));
    return Object.keys(validationErrors).length === 0;
  };

  // Função para validar a primeira etapa (Nome e Data de Nascimento)
  const validateCadastroPaciente1 = () => {
    const validationErrors = {};

    if (!paciente.nome_completo || paciente.nome_completo.trim() === "") {
      validationErrors.nome = "Nome completo é obrigatório.";
    }

    const selectedDate = new Date(paciente.data_nascimento);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - selectedDate.getFullYear();
    const month = currentDate.getMonth() - selectedDate.getMonth();
    const day = currentDate.getDate() - selectedDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
      age--;
    }

    if (!paciente.data_nascimento) {
      validationErrors.data_nascimento = "Data de nascimento é obrigatória.";
    } else if (age < 18) {
      validationErrors.data_nascimento = "Você precisa ter 18 anos ou mais.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }));
  };

  // Função de navegação para o próximo passo
  const handleNext = () => {
    if (activeStep === 0) {
      if (!validateCadastroPaciente1()) {
        
      }
    }

    if (activeStep === 2) {
      if (!validateEmailAndPassword()) {
        // Caso haja erro de validação, não avançar
        return;
      }
    }

    if (activeStep < 2) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Função para voltar para a etapa anterior
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  // Função para finalizar o cadastro e enviar os dados
  const handleFinish = async () => {
    if (!validateEmailAndPassword()) {
      return; // Não envia os dados caso haja erro de validação
    }

    // Aqui, atualizamos o paciente com os dados de email e senha, que vêm de CadastroPaciente3
    const updatedPaciente = { ...paciente, id_paciente: paciente.id_paciente + 1 };

    try {
      const response = await fetch('http://localhost:3000/cadastro-paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPaciente),
      });

      if (response.ok) {
        // Após cadastro bem-sucedido, resetar dados e navegar para o login
        setPaciente({
          nome_completo: '',
          cpf: '',
          telefone: '',
          data_nascimento: '',
          senha: '',
          foto: '',
          email: ''
        });
        navigate('/login');
      } else {
        const data = await response.json();
        console.error('Erro ao cadastrar paciente:', data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  // UseEffect para controlar mudanças e evitar loops infinitos
  useEffect(() => {
    if (activeStep === 0) {
      validateCadastroPaciente1();
    }

    if (activeStep === 2) {
      validateEmailAndPassword();
    }
  }, [activeStep, paciente.email, paciente.senha, termosAceitos]); // Dependências ajustadas

  return (
    <div className='escolhaCadastro-container'>
      <div className='lado-esquerdo'>
        <Stepper activeStep={activeStep} />
        {activeStep === 0 ? (
          <CadastroPaciente1 
            paciente={paciente} 
            setErrors={setErrors} 
            errors={errors} 
          />
        ) : activeStep === 1 ? (
          <CadastroPaciente2 />
        ) : activeStep === 2 ? (
          <CadastroPaciente3 
            paciente={paciente}
            setPaciente={setPaciente} // Passe a função setPaciente para que possa ser atualizada
            setTermosAceitos={setTermosAceitos} 
            termosAceitos={termosAceitos}
          />
        ) : (
          <div></div>
        )}
        <div className='Proximo'>
          <div className='botao1'>
            <button
              className='proximo-estilizado'
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </button>
          </div>
          <div className='botao2'>
            <button
              className='proximo-estilizado'
              onClick={activeStep === 2 ? handleFinish : handleNext}
              disabled={activeStep === 2 && !validateEmailAndPassword()}
            >
              {activeStep === 2 ? <div><Link to="/">Concluir</Link></div> : <div>Próximo</div>}
            </button>
          </div>
        </div>
      </div>

      <div className='lado-direito'>
        <div className='arvore'>
          <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente;

