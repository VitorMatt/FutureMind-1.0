import './NavBar.css';
import logo from '../assets/logo (2).png';

function NavBar() {

  return(
    
    <>
    <nav className='navBar'>
        <img src={logo} />
        <div className = "Link">
           <a>Início</a>
           <a>Sobre nós</a>
           <a>Agendamento</a>
           <button className='btn2'>Entrar</button>
        </div>
    </nav>
    </>
  );
}

export default NavBar;