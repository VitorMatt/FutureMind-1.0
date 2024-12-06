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
  const { paciente } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);
  const {usernameValid} = useContext(GlobalContext)
  const {usernameHover, setUsernameHover}= useContext(GlobalContext)
  


  const valida_data = () => {
    
    const data_atual = new Date()
    const idade = data_atual.getFullYear() - paciente.dataNascimento.getFullYear();
    const mes_atual = data_atual.getMonth() - paciente.dataNascimento.getMonth()


    if(paciente.data_nascimento == null || paciente.dataNascimento == ''){
      
      setErroData('Você Não Digitou Sua Data De Nascimento')
      
      return false

    }else if(idade < 18 || mes_atual < 0){
        
      setErroData('Você Não tem 18 anos')

      return false

    }else{
      setErroData('')

      return true
    }
  }

  // Função de navegação para o próximo passo
  const handleNext = () => {
    if (activeStep === 0) {
      if (usernameValid == true) {
      
        return
      }
    }

    if (activeStep === 2) {
      if (!valida_email()) {
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



