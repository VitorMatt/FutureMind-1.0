import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper'
import '../pages/CSS/CadastroProfissional.css'
import CadastroSelecao1 from '../components/CadastroSelecao1'
import { useState } from 'react';
import CadastroFormado from '../components/CadastroFormado1';


function CadastroProfissinal() {

  const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
        if (activeStep < 6) { // ajuste o número de passos, 6 neste caso
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
            
        <HorizontalLinearAlternativeLabelStepper activeStep={activeStep} />
        {
          activeStep==0
          ?
          <CadastroSelecao1 />
          :
          activeStep==1
          ?
          <CadastroFormado /> 
          :
          <div>        
          </div>
          }
        <div className='Proximo'>
              <div className='botao1'>
              <button className='proximo-estilizado' onClick={handleBack} disabled={activeStep === 0}>
              Voltar
              </button>
              </div>
              <div className='botao2'>
               <button className='proximo-estilizado' onClick={handleNext} disabled={activeStep === 6}>
                {
                  activeStep==6
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
