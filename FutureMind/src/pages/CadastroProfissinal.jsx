import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper'
import '../pages/CSS/CadastroProfissional.css'
import { useState } from 'react';
import CadastroProfissionais4 from '../components/CadastroProfissionais4';
import CadastroFormado from '../components/CadastroFormado1';
import CadastroProfissionais3 from '../components/CadastroProfissionais3';
import CadastroProfissionais5 from '../components/CadastroProfissionais5';
import CadastroProfissionais6 from '../components/CadastroProfissinais6';
import CadastroProfissionais7 from '../components/CadastroProfissionais7';
import { useNavigate } from 'react-router-dom';

function CadastroProfissinal() {

  const navigate = useNavigate()

  const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
        if (activeStep < 5) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };
  
    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };    

    const handleFinish = () => {
      navigate('/login'); 
    };

  return (
    <div className='escolhaCadastro-container'>
        <div className='lado-esquerdo'>
            
        <HorizontalLinearAlternativeLabelStepper activeStep={activeStep} />
        {
          activeStep==0
          ?
          <CadastroFormado />
          :
          activeStep==1
          ?
          <CadastroProfissionais3 />
          :
          activeStep==2
          ?
          <CadastroProfissionais4 />
          :
          activeStep==3
          ?
          <CadastroProfissionais5 />
          :
          activeStep==4
          ?
          <CadastroProfissionais6 />
          :
          activeStep==5
          ?
          <CadastroProfissionais7 />
          :
          <div></div>
          
        }
        <div className='Proximo'>
              <div className='botao1'>
              <button className='proximo-estilizado' onClick={handleBack} disabled={activeStep === 0}>
              Voltar
              </button>
              </div>
              <div className='botao2'>
               <button 
                      className='proximo-estilizado'
                      onClick={
                        activeStep==5
                        ?
                        handleFinish
                        :
                        activeStep==2 
                        ?
                        (
                          handleNext
                        )
                        :
                        handleNext
                      } 
                      >
                {
                  activeStep==5
                  ?
                  <div>
                  Concluir
                  </div>
                  :
                  <div>
                  Próximo
                  </div>
                }
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
  )
}

export default CadastroProfissinal
