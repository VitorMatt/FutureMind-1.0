import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper'
import '../pages/CSS/CadastroProfissional.css'
import CadastroSelecao1 from '../components/CadastroSelecao1'
import { useState, useContext } from 'react';
// import CadastroFormado from '../components/CadastroFormado1';
import CadastroProfissionais4 from '../components/CadastroProfissionais4';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import CadastroFormado from '../components/CadastroFormado1';
import CadastroProfissionais3 from '../components/CadastroProfissionais3';
import CadastroProfissionais5 from '../components/CadastroProfissionais5';
import CadastroProfissionais6 from '../components/CadastroProfissinais6';
import CadastroProfissionais7 from '../components/CadastroProfissionais7';

function CadastroProfissinal() {

  const {pageCadastro, setPageCadastro} = useContext(GlobalContext);

  const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => {
        if (activeStep < 6) {
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
      
      if (page == '') {
        alert('Nenhum conteúdo selecionado');
        setPageCadastro('');
      } else {
        setPageCadastro(page);
      }
    }


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
          activeStep==2
          ?
          <CadastroProfissionais3 />
          :
          activeStep==3
          ?
          <CadastroProfissionais4 />
          :
          activeStep==4
          ?
          <CadastroProfissionais5 />
          :
          activeStep==5
          ?
          <CadastroProfissionais6 />
          :
          activeStep==6
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
                        activeStep==2 
                        ?
                        (
                          handleRadio,
                          handleNext
                        )
                        :
                        handleNext
                      } 
                      disabled={activeStep === 6}>
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
