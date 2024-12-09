import '../pages/CSS/CadastroProfissional.css';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroPaciente1 from '../components/CadastroPaciente1';
import CadastroPaciente2 from '../components/CadastroPaciente2';
import CadastroPaciente3 from '../components/CadastroPAciente3';
import Stepper from '../components/StepperComponent';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CadastroPaciente() {
  
  const { paciente } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);
  const {usernameValid} = useContext(GlobalContext)
  const {data_nascimentoValid} = useContext(GlobalContext)
  const {cpfValid} = useContext(GlobalContext)
  const {telefoneValid} = useContext(GlobalContext)
 

  // Função de navegação para o próximo passo
  const handleNext = () => {
    if (activeStep === 0) {
      if (!usernameValid || !data_nascimentoValid) {
        return; // Não avança se o username ou data de nascimento forem inválidos
      }
    }
  
    if (activeStep === 2 ) {
      // Certifique-se de que o CPF e o telefone sejam válidos antes de avançar
      if (!cpfValid || !telefoneValid ) {
        return // Impede de avançar se CPF ou telefone forem inválidos
      }
    }
  
    if (activeStep < 2 ) {
      setActiveStep((prevStep) => prevStep + 1); // Avança para o próximo passo
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
    if (!valida_email()) {
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
        
          paciente.nome_completo = '',
          paciente.cpf = '',
          paciente.telefone = '',
          paciente.data_nascimento = '',
          paciente.senha = '',
          paciente.foto = '',
          paciente.email = ''
        
        navigate('/login');
      } else {
        const data = await response.json();
        console.log('Erro ao cadastrar paciente:', data);
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  return (
    
    <div className='escolhaCadastro-container'>
      <div className='lado-esquerdo'>
        <Stepper activeStep={activeStep} />
        {activeStep === 0 ? (
          <CadastroPaciente1 />
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
              {activeStep === 2 ? <div><Link to="/login">Concluir</Link></div> : <div>Próximo</div>}
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



