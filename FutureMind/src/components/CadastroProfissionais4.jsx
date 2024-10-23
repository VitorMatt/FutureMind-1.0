import React from 'react'
import'./CSS/CadastroProfissionais1.css'
import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'

function CadastroProfissionais4() {
  return (
    <div className='escolhaCadastro-container'>
    <div className='Lado-esquerdo'>
      <HorizontalLinearAlternativeLabelStepper />
      <h3 className='titulo-Cadastro2'>Selecione sua especialização..</h3>
      <div className='checkboxs'>
        <div className='checks-organiza'>

        <div className='check-esquerdo'>

          <div className='estlizacao-checkbox'>
         <input type="checkbox" name="a" id="" className='checkBoxs' /><label htmlFor="" className='label1'>Relacionamento</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Depressão</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Angústia</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Ansiedade</label>
          </div>
        </div>

        <div className='check-direito'>

          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Bullying</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Autoaceitação</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>LGBTQIA+</label>
          </div>
          <div className='estlizacao-checkbox'>
          <input type="checkbox" name="a" id="" className='checkBoxs'/><label htmlFor="" className='label1'>Adolesência</label>
          </div>
        </div>
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


export default CadastroProfissionais4