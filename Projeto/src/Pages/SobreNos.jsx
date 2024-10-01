import React from 'react'
import './CSS/SobreNos.css'
import img from '../assets/img.png'
import Bola from '../assets/Bola.png'

function SobreNos() {
  return (
    <div>
        <div className='corpo'>
            <img className='img' src={img}/>
            <div className='infoMissao'>
                 <h1 className='titulo'>Missão:</h1>
                <p className='texto'>A FutureMind é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos experientes.</p>
            </div>
        </div>
      <img src={Bola} className='bolinhas'/>
      
    </div>
  )
}

export default SobreNos
