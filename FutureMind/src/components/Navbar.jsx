import { useContext, useState, useEffect } from 'react';
import './CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Navbar() {
  const { user, id, setId } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const idAux = id;

  useEffect(() => {

    setId(idAux);
  }, [idAux]);

  const handleUserClick = () => {
    if (user.logado) {
      if (user.profissional) {
        navigate('/perfilprofissional');
      } else {
        navigate('/perfil-paciente');
      }
    } else {
      navigate('/login');
    }
  };

  const handleCLick = (id) => idAux = id;

  const handleSearch = async () => {
    
      const response = await fetch(`http://localhost:3000/api/profissionais?query=${encodeURIComponent(searchTerm)}`);

      if (response.ok) {

        const data = await response.json();
        setSearchResults(data); // Atualiza os resultados com a resposta da API
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
          !user.logado ? (
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
              <li key={profissional.id_profissional}>
                <Link onClick={() => handleCLick(profissional.id_profissional)} to={`/profissional/${profissional.id_profissional}`}>
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
