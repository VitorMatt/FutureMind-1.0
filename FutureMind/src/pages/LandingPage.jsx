import './CSS/LandingPage.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import img from '../../public/image.png'
import imgPhone from '../../public/phoneImage.png'
import imgCirculo from '../../public/CirculoImagem.png'

function LandingPage() {
  return (

    <div className='landingPage-container'>
      <Navbar />
      
      <div className='container-maior'>

      <div className="info">
           <h1 className="titulo">Um futuro para sua mente</h1>
           <p className="subtitulo">Moldamos nosso próprio futuro, quando transformamos nossa mente.
           Vamos cultivar esse futuro promissor juntos?</p>
           <Link to='/'>
           <button className="btn">Comece Já</button>
           </Link>
        </div>

        <div className="img">
           <img src={img} />
        </div>
      </div>
        <div className='back'>
          <div className='imgPhone'>
            <img src={imgPhone} className='phoneImage' />
          </div>

          <div className='conteudo'>
          <div className='titulo-back'>
          <h1>Por quê seus colaboradores preferem a FutureMind?</h1>
          </div>

          <div className='texto-um'>
          <p>Um aplicativo de terapia online simplifica a busca por apoio emocional, permitindo agendar sessões, escolher profissionais e acessar recursos de bem-estar com apenas alguns toques. Sua interface intuitiva torna o uso fácil e acessível para todas as idades.</p>
          <img src={imgCirculo} className='circuloImg' />
          </div>

          <div className='texto-dois'>
          <h1>a</h1>
          </div>

          <div className='conhecer-gente'>
          <h1>a</h1>
          </div>
          </div>
        </div>
        <div className='grande'>

          <div className='esquerdo'>

            <div className='como-funciona'>
                 <h1>gytrytyytty</h1>
            </div>

            <div className='0.1'>
                  <h1>rtttrttt</h1>
            </div>

          </div>
          <div className='imagem-direito'>
                <h1>rgytytytyu</h1>
          </div>
        </div>
    </div>
  )
}

export default LandingPage
