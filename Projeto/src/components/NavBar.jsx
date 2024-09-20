import './NavBar.css';
import logo from '../assets/logo.png'

function NavBar() {

  return(
    
    <>
    <nav>
      <img src={logo} />
      <div className='linkNavBar'>
      </div>
    </nav>
    </>
  );
}

export default NavBar;