import HorizontalLinearAlternativeLabelStepper from '../components/HorizontalLinearAlternativeLabelStepper'
import './CSS/EscolhaCadastro.css'

function EscolhaCadastro() {
  
  function verifica() {
    
    const radio = document.getElementsByName('a')
    let page;

    for (let i=0; i<radio; i++) {

      if (radio[i].checked) {

        page = radio[i].value
        break;
      }
    }
    return page
  }

  function direcionaCadastro() {

    const page = verifica()

    if (page==='pr') {
      alert('nenhum conteudo selecionado')
      return false

    }
      
      window.location.href='/cadastro-paciente'
      return true

  }

  return (
    <div className='escolhaCadastro-container'>
      <div className='Lado-esquerdo'>
        <h3 className='titulo-Cadastro'>Selecione um tipo de cadastro:</h3>
        <div className='checkboxs'>
            <div className='estilização-Check'>
           <input value='pr' type="radio" name="a" id="check1" className='check1' /><label htmlFor="" className='label1'>Sou Profissional</label>
            </div>

            <div className='estilização-Check'>
            <input value='paciente' type="radio" name="a" id="check2" className='check1'/><label htmlFor="" className='label1'>Sou Paciente</label>
            </div>
            
        <div className='Proximo'>
          <div className='botao1'>

            <button className='proximo-estilizado'>Entrar</button>
          </div>
          <div className='botao2'>

            <button onClick={direcionaCadastro} className='proximo-estilizado'>Próximo</button>
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
