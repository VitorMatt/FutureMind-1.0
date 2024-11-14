import './CSS/Login.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {

  const [olhosSenha, setOlhosSenha] = useState(false);

  const [login, setLogin] = useState([]);
  const [form, setForm] = useState({ email: '', senha: '' });

  // Função para buscar todos os clientes
  const fetchLogin = async () => {
    const response = await fetch('<http://localhost:3000/login>');
    const data = await response.json();
    setLogin(data);
  };

  useEffect(() => {
    fetchLogin();
  }, []);

  const handleSubmit = async () => {
    // const response = await fetch('<http://localhost:3000/login>', {
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });

    if (response.ok) {
        fetchLogin(); // Atualiza a lista de clientes após a adição
        setLogin({ email: '', senha: '' }); // Limpa o formulário
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
