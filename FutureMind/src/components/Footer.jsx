import './CSS/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>

      <div className='links-footer'>
        <div className='foto-footer'>
          <img src="logo (2).png"/>
        </div>
        <div className='sub-links-footer'>
          <Link><img src="icon _google.svg"/></Link>
          <Link><img src="icon _ linkedin.svg"/></Link>
          <Link><img src="icon _instagram.svg"/></Link>
          <Link><img src="icon _facebook.svg"/></Link>
          <Link><img src="icon _YouTube.svg"/></Link>
        </div>
        <div className='direitos-footer'>
          <p>© 2024 FutureMind. Todos os direitos reservados.</p>
        </div>
      </div>

      <div className='empresa-footer'>
        <p className='titulo3-footer'><strong>Empresa</strong></p>
        <div className='subtitulo-footer'>
          <div className='div-sub'>
            <Link to="/politica" className='sub-link'>Segurança</Link>
          </div>
          <div className='div-sub'>
            <Link to="/sobrenos" className='sub-link'>Sobre Nós</Link>
          </div>
          <div className='div-sub'>
            <Link to="/politica" className='sub-link'>Privacidade</Link>
          </div>
          <div>
            <Link to="/termos" className='sub-link'>Termos</Link>
          </div>
        </div>
      </div>

      <div className='baixar-footer'>
        <p className='titulo-footer'><strong>Baixar</strong></p>
        <div className='subtitulo-footer'>
          <p>IOS e Android</p>
          <p>Mac e Windows</p>
          <p>Calendário</p>
          <p>Web clipper</p>
        </div>
      </div>

      <div className='para-footer'>
        <p className='titulo2-footer'><strong>FutureMind para</strong></p>
        <div className='subtitulo-footer'>
          <p>Enterprise</p>
          <p>Pequenas empresas</p>
          <p>Individual</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
