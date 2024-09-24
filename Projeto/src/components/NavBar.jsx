import './NavBar.css';
import logo from '../assets/logo (2).png';

function NavBar() {

  return(
    
    <>
    <nav class='navBar'>
        <img src={logo} />
        <div class = "Link">
           <label for ="">Início</label>
           <label for ="">Sobre nos</label>
           <label for ="">Agendamento</label>
           <label class="btn">Entrar</label>
        </div>
    </nav>
    </>
  );
}

export default NavBar;