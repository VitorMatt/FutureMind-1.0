import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper';
import '../pages/CSS/CadastroProfissional.css';
import CadastroSelecao1 from '../components/CadastroSelecao1';
import { useState, useContext } from 'react';
import CadastroProfissionais4 from '../components/CadastroProfissionais4';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroPaciente1 from '../components/CadastroPaciente1';
import CadastroPaciente2 from '../components/CadastroPaciente2';
import CadastroPaciente3 from '../components/CadastroPaciente3';
import Stepper from '../components/StepperComponent';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

function CadastroPaciente() {
  const navigate = useNavigate(); // Mover o useNavigate para dentro do componente

  const { pageCadastro, setPageCadastro } = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);

  const handleFinish = () => {
    navigate('/login'); 
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

  let page = '';
  const handleRadio = () => {
    for (let i = 0; i < pageCadastro.length; i++) {
      if (pageCadastro[i].checked) {
        page = pageCadastro[i].value;
        break;
      }
    }

    if (page === '') {
      alert('Nenhum conteúdo selecionado');
      setPageCadastro('');
    } else {
      setPageCadastro(page);
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