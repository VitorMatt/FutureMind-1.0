import React from 'react'
import './CSS/SobreNos.css'
import img from '../assets/img.png'
import Bola from '../assets/Bola.png'
<<<<<<< HEAD
=======
import NavBar from '../components/NavBar.jsx'
import Arvore from '../assets/Arvore.png'
>>>>>>> 8ca6deaaff2d45baf5aa6e260aa3c772ce544963

function SobreNos() {
  return (
    <div>
<<<<<<< HEAD
=======
      <NavBar />
>>>>>>> 8ca6deaaff2d45baf5aa6e260aa3c772ce544963
        <div className='corpo'>
            <img className='img' src={img}/>
            <div className='infoMissao'>
                 <h1 className='titulo'>Missão:</h1>
                <p className='texto'>A FutureMind é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos experientes.</p>
            </div>
        </div>
      <img src={Bola} className='bolinhas'/>
      
<<<<<<< HEAD
=======
        <div className='infoFundacao'>
          <div>
            <h1 className='titulo2'>Fundação:</h1>
            <p className='texto'>A FutureMind  é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos experientes.</p>
          </div>
        </div>
        <img src={Arvore} className='arvore'/>

>>>>>>> 8ca6deaaff2d45baf5aa6e260aa3c772ce544963
    </div>
  )
}

export default SobreNos
