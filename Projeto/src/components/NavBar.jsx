import './NavBar.css';
import logo from '../assets/logo (2).png';

function NavBar() {

  return(
    
    <>
    <nav className='navBar'>
        <img src={logo} />
        <div className = "Link">
           <label>Início</label>
           <label>Sobre nós</label>
           <label>Agendamento</label>
           <label>Entrar</label>
        </div>
    </nav>
    </>
  );
}

export default NavBar;