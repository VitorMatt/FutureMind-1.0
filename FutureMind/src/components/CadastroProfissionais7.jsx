import './CSS/Profissionais3.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function CadastroProfissionais7() {
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
        <div className="selecao1">
      
        <h3 className='titulo-cadastro2'>Seus Dados..</h3>
        <div className="checkboxs2">
  
      <div className="input-text">
        <label htmlFor="">E-mail</label><input type="text" name="file"className="inputCRP" />
      </div>
      <div className="input-text">
        <label htmlFor="">Crie sua Senha</label><input type="text" className="inputCRP"/>
      </div>
        </div>
      </div>
    );
}

export default CadastroProfissionais7;