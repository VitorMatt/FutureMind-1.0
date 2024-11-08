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
                <img src="Arvore.png"/>
            </div>

            <div className='div-info'>
                <img src="Arvore.png"/>
            </div>

            <div className='titulo-agenda'>
                <img src="Arvore.png"/>
            </div>

            <div className='div-agenda'>
                <img src="Arvore.png"/>
            </div>

        </div>

        <div className='anotações-profissional'>

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

        </div>

        <div className='editar-perfil-profissional'>
            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>
            o
        </div>

      </div>
      
      <Footer />
    </div>
  )
}

export default PerfilProfissional
