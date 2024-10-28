import './CSS/Profissionais3.css'
import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'
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
        <div className="selecao">
                <div className="input_principais">
                    <div className="inputsLogin">
                        <label htmlFor="" className='label1'>E-mail</label>
                        <input type="text" />
                    </div>

                    <div className="inputsLogin">
                        <label htmlFor="" className='label2'>Crie sua senha</label>
                        <input type="text" />
                    </div>

    
                </div>


        </div>
    );
}

export default CadastroProfissionais7;