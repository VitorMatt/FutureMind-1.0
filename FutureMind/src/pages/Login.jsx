import './CSS/Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const [senha, setSenha] = useState('');
  const [olhosSenha, setOlhosSenha] = useState(false);

  return (
    <div className="login-container">
      <div className="Lado-esquerdo">
        <h3 className="titulo-login">Bem-vindo ao seu espaço</h3>
        <div className="input_principais">
          <div className="inputsLogin">
           <label htmlFor="">Email</label> <input type="text" />
          </div>

          <div className="inputsLogin">
            <label htmlFor="" >Senha</label>
            <div className="olho-div">
              <input type={olhosSenha ? 'text' : 'password'} />
            <button onClick={() => {setOlhosSenha(!olhosSenha)}} className='olho'>
          {
            (senha.split('').length>0) &&
            <img src={olhosSenha ? 'olhoAberto.svg'  : 'olhoFechado.svg'} alt="" />
          }
          </button>
            
          </div>
          </div>

        <div className='caminho-cadastro'>
         <label htmlFor="" className='label-Login'>Possui Cadastro?</label><Link to="/cadastro" className='link-para-cadastro'>Aperte aqui</Link>
        </div>
          <div className="botao-login">
            <button className="botao-estilizado">Entrar</button>
          </div>
        </div>
      </div>
      <div className="lado-Direito">
        <div className="arvore">
        <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
        </div>
      </div>
    </div>
  );
}

export default Login;
