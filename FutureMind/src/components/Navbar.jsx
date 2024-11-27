import { useContext, useEffect, useState } from 'react';
import './CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; // Usando useNavigate
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Navbar() {
  const { user, setUser } = useContext(GlobalContext);
  const navigate = useNavigate(); // Usando o hook de navegação
  const [userAux, setUserAux] = useState({});

  // Observando mudanças no estado 'user'
  useEffect(() => {
    setUser(userAux);
  }, [userAux]);

  const handleUserClick = () => {
    if (userAux.logado) {
      if (userAux.profissional) {
        navigate('/perfilprofissional'); // Redireciona para o perfil do profissional
      } else {
        navigate('/perfil-paciente'); // Redireciona para o perfil do paciente
      }
    } else {
      navigate('/login'); // Caso o usuário não esteja logado, redireciona para login
    }
  };

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

        {
          !userAux.logado ? (
            <Link to='/login' className='btn2'>Entrar</Link>
          ) : (
            <button onClick={handleUserClick} className='btn2'>
              <img src="iconuser.svg" alt="" className="user" />
            </button>
          )
        }
        
      </div>
    </nav>
  );
}

export default Navbar;
