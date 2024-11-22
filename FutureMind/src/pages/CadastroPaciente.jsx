import '../pages/CSS/CadastroProfissional.css';
import { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroPaciente1 from '../components/CadastroPaciente1';
import CadastroPaciente2 from '../components/CadastroPaciente2';
import CadastroPaciente3 from '../components/CadastroPaciente3';
import Stepper from '../components/StepperComponent';
import { useNavigate } from 'react-router-dom';

function CadastroPaciente() {
  const navigate = useNavigate(); // Mover o useNavigate para dentro do componente

  const { paciente } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);

  const handleFinish = async () => {

    paciente.id_paciente = paciente.id_paciente + 1;

    const response = await fetch('http://localhost:3000/cadastro-paciente', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente),
    })

    if (response.ok) {

      paciente.nome_completo = ''
      paciente.cpf = ''
      paciente.telefone = ''
      paciente.data_nascimento = ''
      paciente.senha = ''
      paciente.foto = ''
      paciente.email = ''
      navigate('/login'); 
    }
  };

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
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