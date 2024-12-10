import './CSS/Profissionais3.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroPaciente3() {
  const { paciente} = useContext(GlobalContext);
  const [email, setEmail] = useState(paciente.email);
  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha, setSenha] = useState(paciente.senha);
  const {emailValid, setEmailValid} = useContext(GlobalContext)
  const {emailHover, setEmailHover} = useContext(GlobalContext)
  const {senhaValid, setSenhaValid} = useContext(GlobalContext)
  const {senhaHover, setSenhaHover} = useContext(GlobalContext)

  setEmailValid(email.includes("@") )
  setSenhaValid(senha.length >= 8)

  useEffect(() => { 

  paciente.email = email;
  }, [email]);

  useEffect(() => {

  paciente.senha = senha;
  }, [senha]);

  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>

      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            className="inputCRP"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Altera somente o estado local
          />
         <span
          className={`status-indicador ${
          emailValid ? "valid" :  email ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setEmailHover(true)}
         onMouseLeave={() => setEmailHover(false)}
         ></span>
         { emailHover && (

          <div className="tooltip">
            {emailValid

              ? "Email ok"
              : "Email precisa ter um @ "
          
              }
          </div>
         )}
        </div>

        <div className="input-text">
          <label htmlFor="senha">Crie sua Senha</label>
          <div className="olho-div">
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)} // Altera somente o estado local
              type={olhosSenha ? 'text' : 'password'}
              maxLength="10"
              className="inputCRP"
            />
             <span
              className={`status-indicador ${
              senhaValid ? "valid" :  senha ? "invalid" : "neutro"
              }`}
              onMouseEnter={() => setSenhaHover(true)}
               onMouseLeave={() => setSenhaHover(false)}
               ></span>
              { senhaHover && (

              <div className="tooltip">
               {senhaValid

                ? "senha ok"
                : "senha precisa ter no minimo 8 caracteris e no maximo 10 "
          
                }
              </div>
              )}
            
            <button
              onClick={() => setOlhosSenha(!olhosSenha)}
              className="olho"
            >
              {senha.length > 0 && (
                <img
                  src={olhosSenha ? 'olhoAberto.svg' : 'olhoFechado.svg'}
                  alt="Exibir senha"
                />
              )}
            </button>
          </div>
         
        </div>
      </div>
      <div className="caminho-login">
        <input type="checkbox" id="aceitar-termos" />
        <label htmlFor="aceitar-termos" className="label-cadastro">
          Aceitar
        </label>
        <Link to="/termos" className="link-para-termos">
          termos
        </Link>
      </div>
    </div>
  );
}

export default CadastroPaciente3;
