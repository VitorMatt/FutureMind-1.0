import React from 'react'
import './CSS/SobreNos.css'
import img from '../assets/img.png'
import Bola from '../assets/Bola.png'
import NavBar from '../components/NavBar.jsx'
import Arvore from '../assets/Arvore.png'


function SobreNos() {
  return (
    <div>
      <NavBar />
        <div className='corpo'>
            <img className='img' src={img}/>
            <div className='infoMissao'>
                 <h1 className='titulo'>Missão:</h1>
                <p className='texto'>A FutureMind é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos experientes.</p>
            </div>
        </div>
      <img src={Bola} className='bolinhas'/>      
        <div className='infoFundacao'>
          <div>
            <h1 className='titulo2'>Fundação:</h1>
            <p className='texto'>A FutureMind  é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos experientes.</p>
          </div>
        </div>
        <img src={Arvore} className='arvore'/>

    </div>
  )
}

export default SobreNos
