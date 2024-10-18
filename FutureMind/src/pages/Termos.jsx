import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './CSS/Termos.css'

function Termos() {
  return (
      <div>
        <Navbar />
      <div className='divBotoes'>
        <Link className='botaodecisao'>Política de Privacidade</Link>
        <Link className='botaodecisaodois'>Termos de uso</Link>
      </div>
      
      <div className='introducao'>
        <div className='titulo'>
            <h1>Termos de uso da FutureMind</h1>
        </div>
        <div className='textinho'>
            <div><p> Na Future Mind, a sua privacidade é nossa prioridade.</p></div>

           <div><p> Comprometemo-nos a proteger suas informações pessoais e a garantir que você tenha uma experiência segura e confiável em nossa plataforma de terapia online.</p></div>

            <div> <p> Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações, além de esclarecer seus direitos em relação a esses dados.
            Ao utilizar nossos serviços, você concorda com as práticas aqui descritas, e estamos aqui para garantir que sua jornada rumo ao bem-estar mental seja transparente 
            e respeitosa.</p></div> 
           
        </div>
      </div>

      <div className='bolinha'>
        <img src="" alt="" />
      </div>

    </div>
  )
}

export default Termos
