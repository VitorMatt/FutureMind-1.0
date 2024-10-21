import React from 'react'
import './CSS/CadastroFormado1.css'
import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'


function CadastroFormado() {
  return (
    <div className='escolhaCadastro-container'>
    <div className='Lado-esquerdo'>
      <HorizontalLinearAlternativeLabelStepper/>
      <div className='checkboxs'>
      <div className='estilização-file'>
        <label htmlFor="file" className='custom-file-upload '>Foto do CRP:</label><input type="file" name="a" id="file" className='custom-file-upload ' />
          </div>            
          <div className="inputsLogin">
            <label htmlFor="" >CRP:</label><input type="text" />
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

export default CadastroFormado