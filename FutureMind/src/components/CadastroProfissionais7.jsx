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
        <div className="login-container">
            <div className="Lado-esquerdo">
                <HorizontalLinearAlternativeLabelStepper activeStep={activeStep} />
                <div className="input_principais">
                    <div className="inputsLogin">
                        <label htmlFor="" className='label1'>E-mail</label>
                        <input type="text" />
                    </div>

                    <div className="inputsLogin">
                        <label htmlFor="" className='label2'>Crie sua senha</label>
                        <input type="text" />
                    </div>

                    <div className='Proximo'>
                        <div className='botao1'>
                            <button className='proximo-estilizado' onClick={handleBack} disabled={activeStep === 0}>
                                Voltar
                            </button>
                        </div>
                        <div className='botao2'>
                            <button className='proximo-estilizado' onClick={handleNext} disabled={activeStep === 6}>
                                Próximo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lado-Direito">
                <div className="arvore">
                    <img src='logoLogin.png' alt="" className='arvore-estilizada' />
                </div>
            </div>
        </div>
    );
}

export default CadastroProfissionais7;