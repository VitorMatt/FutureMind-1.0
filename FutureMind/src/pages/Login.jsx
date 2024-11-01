import './CSS/Login.css'

function Login() {
  return (
    <div className="login-container">
      <div className="Lado-esquerdo">
        <h3 className="titulo-Cadastro">Entre em sua conta</h3>
        <div className="input_principais">
          <div className="inputsLogin">
           <label htmlFor="">Email</label> <input type="text" />
          </div>

          <div className="inputsLogin">
            <label htmlFor="" >Senha</label><input type="text" />
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
