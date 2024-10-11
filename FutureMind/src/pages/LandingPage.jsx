import './CSS/LandingPage.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import img from '../../public/image.png'

function LandingPage() {
  return (

    <div className='landingPage-container'>
      <Navbar />
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
        <div className='back'>
          <div className='imgPhone'>
            <h1>a</h1>
          </div>

          <div className='conteudo'>
          <div className='titulo-back'>
          <h1>a</h1>
          </div>

          <div className='texto-um'>
          <h1>a</h1>
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
