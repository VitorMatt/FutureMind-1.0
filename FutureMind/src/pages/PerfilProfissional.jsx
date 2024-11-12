import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CSS/PerfilProfissional.css'

function PerfilProfissional() {
  return (
    <div className='perfilPro-container'>
      <Navbar />

      <div className='todas-divs'>

        <div className='perfil-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

            <div className='div-foto-nome'>
                <div className='foto-usuario'>
                    <img src="renato.png" className='a-foto'/>
                </div>
                <div className='nick-usuario'>
                    <h1>João Miguel</h1>
                    <p>joapmiguel@gmail.com</p>
                </div>
            </div>

            <div className='div-info'>
                <div className='div-menor-info'>
                    <p>Eu atendo...</p>
                    <p>Jovens</p>
                    <p>Adultos</p>
                    <p>Casais</p>
                </div>
                <div className='div-menor-info'>
                    <p>Especialidade(s):</p>
                    <p>Bullying</p>
                    <p>Autoaceitação</p>
                </div>
                {/* <div className='descricao'>
                    <p>Descrição:</p>
                    <p>João Miguel é um psicólogo carismático que utiliza terapia cognitivo-comportamental para ajudar seus clientes a crescerem emocionalmente.</p>
                </div> */}
                <div className='descricao'>
                    <p>Descrição:</p>
                    <p>João Miguel é um psicólogo carismático que utiliza terapia cognitivo-comportamental para ajudar seus clientes a crescerem emocionalmente.</p>
                </div>
            </div>

            <div className='titulo-agenda'>
                <img src="Arvore.png"/>
            </div>

            <div className='div-agenda'>
                <img src="Arvore.png"/>
            </div>

        </div>

        {/* <div className='anotações-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

            <div className='input-button'>
                <div className='input-anotações'>
                    o
                </div>
                <div className='button-anotações'>
                    o
                </div>
            </div>

            <div className='div-anotações'>
                o
            </div>

        </div> */}

        {/* <div className='editar-perfil-profissional'>
            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>
            o
        </div> */}

      </div>
      
      <Footer />
    </div>
  )
}

export default PerfilProfissional
