import React from "react";

function Login() {
  return (
    <div className="escolhaCadastro-container">
      <div className="Lado-esquerdo">
        <h3 className="titulo-Cadastro">Selecione um tipo de cadastro:</h3>
        <div className="checkboxs">
          <div className="estilização-Check">
           <label htmlFor="">Email</label> <input type="text" />
          </div>

          <div className="estilização-Check">
            <label htmlFor="">Senha</label><input type="text" />
          </div>

          <div className="Proximo">
            <button className="proximo-estilizado">Próximo</button>
          </div>
        </div>
      </div>
      <div className="lado-Direito">
        <div className="entrar">
          <button className="entrar-estilizado">Entrar</button>
        </div>
        <div className="arvore">
          <img src={arvore} alt="" className="arvore-estilizada" />
        </div>
      </div>
    </div>
  );
}

export default Login;
