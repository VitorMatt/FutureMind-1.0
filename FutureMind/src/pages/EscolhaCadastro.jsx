import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper'
import './CSS/EscolhaCadastro.css'

function EscolhaCadastro() {

  return (
    <div className='escolhaCadastro-container'>
      <div className='Lado-esquerdo'>
        <h3 className='titulo-Cadastro'>Selecione um tipo de cadastro:</h3>
        <div className='checkboxs'>
            <div className='estilização-Check'>
           <input type="radio" name="a" id="" className='check1' /><label htmlFor="" className='label1'>Sou Profissional</label>
            </div>

            <div className='estilização-Check'>
            <input type="radio" name="a" id="" className='check1'/><label htmlFor="" className='label1'>Sou Paciente</label>
            </div>
            
        <div className='Proximo'>
          <div className='botao1'>

            <button className='proximo-estilizado'>Entrar</button>
          </div>
          <div className='botao2'>

            <button className='proximo-estilizado'>Próximo</button>
          </div>
        </div>
        </div>
      </div>
      <div className='lado-Direito'>
        <div className='arvore'>
         <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
        </div>
      </div>
    </div>
  )
}

export default EscolhaCadastro
