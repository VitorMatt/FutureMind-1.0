import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'
import '../pages/CSS/EscolhaCadastro.css'

function CadastroSelecao1() {

  return (
    <div className='escolhaCadastro-container'>
      <div className='Lado-esquerdo'>
        <HorizontalLinearAlternativeLabelStepper />
        <h3 className='titulo-Cadastro'>Selecione um tipo de cadastro:</h3>
        <div className='checkboxs'>
            <div className='estilização-Check'>
           <input type="radio" name="a" id="" className='check1' /><label htmlFor="" className='label1'>Sou Estagiário</label>
            </div>

            <div className='estilização-Check'>
            <input type="radio" name="a" id="" className='check1'/><label htmlFor="" className='label1'>Sou Formado</label>
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

export default CadastroSelecao1
