import './CSS/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <img src='logo (2).png' className='logo-nav'/>
      <div className='Links'>
        <Link className='Link' to='/'>Início</Link>
        <Link className='Link' to='/sobrenos'>Sobre nós</Link>
        <div className='input-container'>
          <input type="text" className='input-nav' placeholder='Busca de ajuda e apoio...' />
          <img src="lupa.svg" alt="ícone de busca" className='img-navBar' />
        </div>

        <Link to='/login' className='btn2'>Entrar</Link>
      </div>
    </nav>
  );
}

export default Navbar;