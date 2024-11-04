import './CSS/Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="Lado-esquerdo">
        <h3 className="titulo-login">Bem-vindo ao seu espaço</h3>
        <div className="input_principais">
          <div className="inputsLogin">
           <label htmlFor="">Email</label> <input type="text" />
          </div>

          <div className="inputsLogin">
            <label htmlFor="" >Senha</label><input type="text" />
          </div>

        <div className='caminho-cadastro'>
          <input type="checkbox" name="" id="" /><label htmlFor="" className='label-Login'>Possui Cadastro?</label><Link to="/Cadastro-profissional" className='link-para-cadastro'>Aperte aqui</Link>
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
