import './CSS/Profissionais3.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function CadastroProfissionais7() {
    const [activeStep, setActiveStep] = useState(0);
    const [olhosSenha, setOlhosSenha] = useState(false);
    const [senha,setSenha] = useState('')


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

    return (
        <div className="selecao1">
      
        <h3 className='titulo-cadastro2'>Seus Dados..</h3>
        <div className="checkboxs2">
  
      <div className="input-text">
        <label htmlFor="">E-mail</label><input type="text" name="file"className="inputCRP" />
      </div>
      <div className="input-text">
        <label htmlFor="">Crie sua Senha</label>
        <div className='olho-div'>
         <input value={senha} onChange={(e) => { setSenha(e.target.value) }} type={olhosSenha ? 'text' : 'password'} className="inputCRP"/> <button onClick={() => {setOlhosSenha(!olhosSenha)}} className='olho'>
          {
            (senha.split('').length>0) &&
            <img src={olhosSenha ? 'olhoAberto.svg'  : 'olhoFechado.svg'} alt="" />
          }
          </button>
        </div>
      </div>
      
        </div>
        <div className='caminho-login'>
          <input type="checkbox" name="" id="" />
         <label htmlFor="" className='label-cadastro'>Aceitar </label><Link to="/termos" className='link-para-termos'>termos</Link>
        </div>
      </div>
    );
}

export default CadastroProfissionais7;