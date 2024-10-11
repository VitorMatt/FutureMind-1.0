import './CSS/EscolhaCadastro.css'
import arvore from '../../public/logoLogin.png'
function EscolhaCadastro() {
  return (
    <div className='escolhaCadastro-container'>
      <div className='Lado-esquerdo'>
        <h3 className='titulo-Cadastro'>Selecione um tipo de cadastro:</h3>
        <div className='checkboxs'>
            <div>
           <input type="radio" name="a" id="" className='check1' /><label htmlFor="" className='label1'>Sou Profissional</label>
            </div>
            <div>
            <input type="radio" name="a" id="" className='check1'/><label htmlFor="" className='label1'>Sou Paciente</label>
            </div>
        </div>
      </div>
      <div className='lado-Direito'>
        <div className='entrar'>
        <button className='entrar-estilizado'>Entrar</button>
        </div>
        <div className='arvore'>
         <img src={arvore} alt="" className='arvore-estilizada'/>
        </div>
      </div>
    </div>
  )
}

export default EscolhaCadastro
