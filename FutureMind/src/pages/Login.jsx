import './CSS/Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {

  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha,setSenha] = useState('')


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
            <div className="olho-div-login">
            <input value={senha} onChange={(e) => { setSenha(e.target.value) }} type={olhosSenha ? 'text' : 'password'} className="input-login"/> <button onClick={() => {setOlhosSenha(!olhosSenha)}} className='olhos-login'>
          {
            (senha.split('').length>0) &&
            <img src={olhosSenha ? 'olhoAberto.svg'  : 'olhoFechado.svg'} alt="" />
          }
          </button>
            
          </div>
          </div>

        <div className='caminho-cadastro'>
         <label htmlFor="" className='label-login'>Não Possui Cadastro?</label><Link to="/cadastro" className='link-para-cadastro'>Aperte aqui</Link>
        </div>
          <div className="botao-login">
            <button className="botao-estilizado">Entrar</button>
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
