import { useContext, useEffect, useState } from 'react';
import './CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Navbar() {
  const { user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [userAux, setUserAux] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setUserAux({ ...user });
  }, [user]);

  const handleUserClick = () => {
    if (userAux.logado) {
      if (userAux.profissional) {
        navigate('/perfilprofissional');
      } else {
        navigate('/perfil-paciente');
      }
    } else {
      navigate('/login');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/profissionais?query=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      setSearchResults(data); // Atualiza os resultados com a resposta da API
    } catch (error) {
      console.error('Erro ao buscar profissionais:', error);
    }
  };

  return (
    <nav className='navbar'>
      <img src='logo (2).png' className='logo-nav'/>
      <div className='Links'>
        <Link className='Link' to='/'>Início</Link>
        <Link className='Link' to='/sobrenos'>Sobre nós</Link>
        <div className='input-container'>
          <input 
            type="text" 
            className='input-nav' 
            placeholder='Busca de ajuda e apoio...' 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <img 
            src="lupa.svg" 
            alt="ícone de busca" 
            className='img-navBar' 
            onClick={handleSearch} 
          />
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

      {/* Resultados da busca */}
      {searchResults.length > 0 && (
        <div className='search-results'>
          <ul>
            {searchResults.map((profissional) => (
              <li key={profissional.id}>
                <Link to={`/profissional/${profissional.id}`}>
                  {profissional.nome}
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
