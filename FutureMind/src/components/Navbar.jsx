import './CSS/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <img src='logo (2).png' />
        <div className='Links'>
           <Link className='Link' to='/'>Início</Link>
           <Link className='Link' to='/sobrenos'>Sobre nós</Link>
           <Link className='Link' to='/'>Agendamento</Link>
           <Link to='/login' className='btn2'>Entrar</Link>
        </div>
    </nav>
  )
}

export default Navbar
