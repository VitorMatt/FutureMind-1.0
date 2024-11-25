import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper'
import '../pages/CSS/CadastroProfissional.css'
import { useContext, useState } from 'react';
import CadastroProfissionais4 from '../components/CadastroProfissionais4';
import CadastroFormado from '../components/CadastroFormado1';
import CadastroProfissionais3 from '../components/CadastroProfissionais3';
import CadastroProfissionais5 from '../components/CadastroProfissionais5';
import CadastroProfissionais6 from '../components/CadastroProfissinais6';
import CadastroProfissionais7 from '../components/CadastroProfissionais7';
import { useNavigate } from 'react-router-dom';
import CadastroProfissionais8 from '../components/CadastroProfissionais8';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissional() {

  const navigate = useNavigate();

  const { profissional } = useContext(GlobalContext);

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


    const handleClick = () => {

      if (activeStep===6) {

        handleFinish();
      } else {

        handleNext();
      }
    }


    
    const handleFinish = async () => {

      
      profissional.id_profissional = profissional.id_profissional + 1;

      const response = await fetch('http://localhost:3000/cadastro-profissional', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profissional),
      })

      if (response.ok) {

        profissional.nome_completo = ''
        profissional.cpf = ''
        profissional.telefone = ''
        profissional.data_nascimento = ''
        profissional.senha = ''
        profissional.foto = ''
        profissional.email = ''
        profissional.crp = ''
        profissional.abordagem = ''
        profissional.preferencias = ''
        profissional.especializacao = ''
        profissional.preco = 0.00
        navigate('/login'); 
      }
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
          <CadastroProfissionais8 />
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
                      onClick={handleClick} 
                      >
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

export default CadastroProfissional;
