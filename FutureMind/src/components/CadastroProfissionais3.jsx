import'./CSS/CadastroProfissionais1.css'
import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'
function CadastroProfissionais3() {
  return (
    <div className='escolhaCadastro-container'>
    <div className='Lado-esquerdo'>
      <HorizontalLinearAlternativeLabelStepper />
      <h3 className='titulo-Cadastro2'>Eu Atendo..</h3>
      <div className='checkboxs'>
          <div className='estlizacao-checkbox'>
         <input type="checkbox" name="a" id="" className='checkBoxs' /><label htmlFor="" className='label1'>Adolecente</label>
          </div>

          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Idosos</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Pré-adolescente</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Crianças</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Adultos</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>PCDs</label>
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
    <div className='lado-Direito'>
      <div className='arvore'>
       <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
      </div>
    </div>
  </div>
  )
}


export default CadastroProfissionais3