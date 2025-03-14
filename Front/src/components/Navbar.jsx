import { useContext, useState } from 'react';
import './CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Navbar() {
  const { user, setId } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const userLog = JSON.parse(localStorage.getItem('User'));

  const handleUserClick = () => {
    try {
      if (user.logado) {
        if (user.profissional) {
          navigate('/perfil-profissional');
        } else {
          navigate('/perfil-paciente');
        }
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error("Erro ao navegar:", error);
    }
  };

  const handleCLick = (id) => {
    try {
      console.log("Clicou no profissional com ID:", id);
      setId(id); // Atualiza o estado global
      console.log("Novo ID no contexto:", id);
    } catch (error) {
      console.error("Erro ao definir ID:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profissionais?query=${encodeURIComponent(searchTerm)}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Resultados da busca:", data);
        setSearchResults(data); // Atualiza os resultados com a resposta da API
      } else {
        console.error("Erro ao buscar dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao realizar busca:", error);
    }
  };

  return (
    <nav className='navbar'>
      <Link to='/landingpage'>
      <img src='logo (2).png' className='logo-nav'/>
      </Link>
      <div className='Links'>
        <Link className='Link' to='/'>Início</Link>
        <Link className='Link' to='/sobrenos'>Sobre nós</Link>
        <div className='input-container'>
      <input 
      type="text" 
      className="input-nav" 
      placeholder="Busca de ajuda e apoio..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
     />
     <img 
      src="lupa.svg" 
      alt="ícone de busca" 
      className="img-navBar" 
      onClick={handleSearch} 
     />
        </div>

        {
          !user?.logado ? (
            <Link to='/login' className='btn2'>Entrar</Link>
          ) : (
            <button onClick={handleUserClick} className='btn2'>
              <img src={userLog.foto === 'iconuser.svg' ? userLog.foto : `http://localhost:3000${userLog.foto}`} alt="" className="user" />
            </button>
          )
        }
      </div>

  {searchTerm.trim() !== "" && searchResults.length > 0 && (
    <div className="search-results">
      <ul>
        {searchResults.map((profissional) => (
          <li 
            key={profissional.id_profissional}
            onClick={() => handleCLick(profissional.id_profissional)}
          >
            <Link to={`/profissional/${profissional.id_profissional}`}>
              {profissional.nome_completo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
    </nav>
  );
}

export default Navbar;
