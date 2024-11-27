import './CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Login() {

  const navigate = useNavigate();
  const [olhosSenha, setOlhosSenha] = useState(false);
  
  const { user, setUser } = useContext(GlobalContext);
  const [form, setForm] = useState({ email: '', senha: '' });
  
  const handleGet = async () => {
    
    const res = await fetch('http://localhost:3000/login');

    const data = await res.json();

    localStorage.setItem('User', JSON.stringify(data));
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (!form.email || !form.senha) {
      alert('Por favor, preencha ambos os campos');
      return;
    }
    
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    
    if (response.ok) {
      
      setForm({ email: '', senha: '' });
      handleGet();

      var userAux = {...user};

      if (JSON.parse(localStorage.getItem('User')).hasOwnProperty('id_profissional')) {

        userAux.profissional = true;
      } else {

        userAux.profissional = false;
      }

      userAux.logado = true;
      setUser(userAux);
      navigate('/');  
      } else {
        const errorData = await response.json();
        alert('Erro no login: ' + errorData.message);
      }
    };
    

  return (
    <div className="login-container">
      <div className="Lado-esquerdo">
        <h3 className="titulo-login">Bem-vindo ao seu espaço</h3>
        <div className="input_principais">
          <div className="inputsLogin">
           <label htmlFor="">Email</label> <input type="text" value={form.email} onChange={(e) => { setForm({...form, email: e.target.value})}} />
          </div>

          <div className="inputsLogin">
            <label htmlFor="" >Senha</label>
            <div className="olho-div-login">
            <input value={form.senha} onChange={(e) => { setForm({...form, senha: e.target.value})}} type={olhosSenha ? 'text' : 'password'} className="input-login"/> <button onClick={() => {setOlhosSenha(!olhosSenha)}} className='olhos-login'>
          {
            (form.senha.length>0) &&
            <img src={olhosSenha ? 'olhoAberto.svg'  : 'olhoFechado.svg'} alt="" />
          }
          </button>
            
          </div>
          </div>

        <div className='caminho-cadastro'>
         <label htmlFor="" className='label-login'>Não Possui Cadastro?</label><Link to="/cadastro" className='link-para-cadastro'>Aperte aqui</Link>
        </div>
          <div className="botao-login">
            <button className="botao-estilizado" onClick={handleSubmit}>Entrar</button>
          </div>
        </div>
      </div>
      <div className="lado-Direito">
        <div className="arvore2">
        <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
        </div>
      </div>
    </div>
  );
}

export default Login;
