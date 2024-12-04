import '../pages/CSS/CadastroProfissional.css';
import { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroPaciente1 from '../components/CadastroPaciente1';
import CadastroPaciente2 from '../components/CadastroPaciente2';
import CadastroPaciente3 from '../components/CadastroPaciente3';
import Stepper from '../components/StepperComponent';
import { useNavigate } from 'react-router-dom';

function CadastroPaciente() {
  const navigate = useNavigate();
  const { paciente } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});

  const validateCadastroPaciente1 = () => {
    const Novos_erros_um = {};
  
    // Verificação do nome
    if (!paciente.nome_completo || paciente.nome_completo.trim() === "") {
      Novos_erros_um.nome = "Nome completo é obrigatório.";
    }
  
    // Cria as consts para guardar informação do paciente e a data atual

    const selectedDate = new Date(paciente.data_nascimento);
    const currentDate = new Date();
    
    // Calcula a idade em anos

    let age = currentDate.getFullYear() - selectedDate.getFullYear(); // getFullYer pega so o ano da data para fazer os calculos
    const month = currentDate.getMonth() - selectedDate.getMonth(); // getMonth retorna o numero de 1 a 12 do mes 
    const day = currentDate.getDate() - selectedDate.getDate(); // retorna o dia de 1 a 31 
    
    // Se o mês atual for antes do mês de nascimento ou o mês for igual, mas o dia de nascimento ainda não ocorreu

    if (month < 0 || (month === 0 && day < 0)) {
      age--; // Se não completou o aniversário ainda no ano atual
    }
  
    // Verificação de idade: precisa ter 18 anos ou mais
    if (!paciente.data_nascimento) {

      Novos_erros_um.data_nascimento = "Data de nascimento é obrigatória.";

    } else if (age < 18) {
      Novos_erros_um.data_nascimento = "Você precisa ter 18 anos ou mais.";
    }
  
    // Atualiza o estado de erros
    setErrors(Novos_erros_um);
  
    // Retorna true se não houver erros
    return Object.keys(Novos_erros_um).length === 0;
  };

  const handleNext = () => {
    if (validateCadastroPaciente1()) {
      if (activeStep < 2) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    } 
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = async () => {
    paciente.id_paciente = paciente.id_paciente + 1;

    const response = await fetch('http://localhost:3000/cadastro-paciente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente),
    });

    if (response.ok) {
      // Limpa os dados do paciente após o envio bem-sucedido
      paciente.nome_completo = '';
      paciente.cpf = '';
      paciente.telefone = '';
      paciente.data_nascimento = '';
      paciente.senha = '';
      paciente.foto = '';
      paciente.email = '';
      navigate('/login'); 
    }
  };

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
          <CadastroPaciente3 />
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
            >
              {activeStep === 2 ? <div>Concluir</div> : <div>Próximo</div>}
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