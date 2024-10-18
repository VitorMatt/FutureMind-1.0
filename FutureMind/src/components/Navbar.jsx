import './CSS/Navbar.css'
import logo from '../../public/logo (2).png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} />
        <div className='Links'>
           <Link className='Link' to='/'>Início</Link>
           <Link className='Link' to='/sobrenos'>Sobre nós</Link>
           <Link className='Link' to='/'>Agendamento</Link>
           <Link to='/' className='btn2'>Entrar</Link>
           
        </div>
    </nav>
  )
}

export default Navbar
