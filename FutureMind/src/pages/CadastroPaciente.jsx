import '../pages/CSS/CadastroProfissional.css';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroPaciente1 from '../components/CadastroPaciente1';
import CadastroPaciente2 from '../components/CadastroPaciente2';
import CadastroPaciente3 from '../components/CadastroPAciente3';
import Stepper from '../components/StepperComponent';
import { Navigate, useNavigate } from 'react-router-dom';

function CadastroPaciente() {
  const { paciente, setPaciente } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);
  const { usernameValid } = useContext(GlobalContext);
  const { data_nascimentoValid } = useContext(GlobalContext);
  const { cpfValid } = useContext(GlobalContext);
  const { telefoneValid } = useContext(GlobalContext);
  const { setErros_passar } = useContext(GlobalContext);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const {checkbox_cheked, setcheckbox_cheked} = useState(GlobalContext)

  const navigate = useNavigate('');

  const handleNext = () => {
    if (activeStep === 0) {
      setIsNextClicked(true);
      if (!usernameValid || !data_nascimentoValid) {
        if (!usernameValid) {
          setErros_passar('')
          setErros_passar('1');
          return;
        }
        if (!data_nascimentoValid) {
          setErros_passar('')
          setErros_passar('2');
          return;
        }

        
      } else {
        setErros_passar('');
        setActiveStep((prevStep) => prevStep + 1);
        
      }
    }

    if (activeStep === 1) {
      setIsNextClicked(true); // Marca que o botão foi clicado
      if (!cpfValid) {
        setErros_passar('')
        setErros_passar('4'); // Retorna erro caso os campos sejam inválidos
        return;
      }

      if(!telefoneValid){
        setErros_passar('')
        setErros_passar('5'); // Retorna erro caso os campos sejam inválidos
        return;

      }

      else{
        setErros_passar('');
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
    const { emailValid, senhaValid } = useContext(GlobalContext);
    if (!emailValid || !senhaValid || checkbox_cheked == false) {
      return;
    }

    const updatedPaciente = { ...paciente };

    try {
      const response = await fetch('http://localhost:3000/cadastro-paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPaciente),
      });

      if (response.ok) {
        setPaciente({
          nome_completo: '',
          cpf: '',
          telefone: '',
          data_nascimento: '',
          senha: '',
          foto: '',
          email: '',
        });

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
    <div className="escolhaCadastro-container">
      <div className="lado-esquerdo">
        <Stepper activeStep={activeStep} />
        {activeStep === 0 ? (
          <CadastroPaciente1 showError={isNextClicked} />
        ) : activeStep === 1 ? (
          <CadastroPaciente2 showError={isNextClicked} />
        ) : activeStep === 2 ? (
          <CadastroPaciente3 />
        ) : (
          <div></div>
        )}

        <div className="Proximo">
          <div className="botao1">
            <button
              className="proximo-estilizado"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </button>
          </div>
          <div className="botao2">
            <button
              className="proximo-estilizado"
              onClick={activeStep === 2 ? handleFinish : handleNext}
            >
              {activeStep === 2 ? (
                <div>Concluir</div>
              ) : (
                <div>Próximo</div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="lado-direito">
        <div className="arvore">
          <img src="logoLogin.png" alt="" className="arvore-estilizada" />
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente;
