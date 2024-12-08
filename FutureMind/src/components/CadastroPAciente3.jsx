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

  setEmailValid(email.includes("@") )
  
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
            className={emailValid ? "valid" : email ? "invalid" : "neutro"}
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
              className="inputCRP"
            />
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
