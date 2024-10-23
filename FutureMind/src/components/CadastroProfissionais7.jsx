import './CSS/Profissionais3.css'
import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'
function CadastroProfissionais7() {
    return (
        <div className="login-container">
        <div className="Lado-esquerdo">
        <HorizontalLinearAlternativeLabelStepper/>
          <div className="input_principais">
            <div className="inputsLogin">
             <label htmlFor="" className='label1'>E-mail</label> <input type="text" />
            </div>
  
            <div className="inputsLogin">
              <label htmlFor="" className='label2'>Crie sua senha</label><input type="text" />
            </div>
  
            <div className='Proximo'>
        <div className='botao1'>

          <button className='proximo-estilizado'>Voltar</button>
        </div>
        <div className='botao2'>

          <button className='proximo-estilizado'>Próximo</button>
        </div>
      </div>
          </div>
        </div>
        <div className="lado-Direito">
          <div className="arvore">
          <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
          </div>
        </div>
      </div>
    )
  }
  
  
  
  export default CadastroProfissionais7