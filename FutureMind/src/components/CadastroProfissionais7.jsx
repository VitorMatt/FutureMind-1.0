import './CSS/Profissionais3.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais7() {

  const { profissional} = useContext(GlobalContext);
  const [email, setEmail] = useState(profissional.email);
  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha, setSenha] = useState(profissional.senha);
  const {emailProfissionalValid, setEmailProfissionalValid} = useContext(GlobalContext)
  const {emailProfissionalHover, setEmailProfissonalHover} = useContext(GlobalContext)
  const {senhaProfissionalValid, setSenhaProfissionalValid} = useContext(GlobalContext)
  const {senhaProfissionalHover, setSenhaProfissionalHover} = useContext(GlobalContext)

  setEmailProfissionalValid(email.includes("@") )
  setSenhaProfissionalValid(senha.length >= 8)

  useEffect(() => { 
 
  profissional.email = email;
  }, [email]);

  useEffect(() => {

  profissional.senha = senha;
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
          emailProfissionalValid ? "valid" :  email ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setEmailProfissonalHover(true)}
         onMouseLeave={() => setEmailProfissonalHover(false)}
         ></span>
         { emailProfissionalHover && (

          <div className="tooltip">
            {emailProfissionalValid

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
              senhaProfissionalValid ? "valid" :  senha ? "invalid" : "neutro"
              }`}
              onMouseEnter={() => setSenhaProfissionalHover(true)}
               onMouseLeave={() => setSenhaProfissionalHover(false)}
               ></span>
              { senhaProfissionalHover && (

              <div className="tooltip">
               {senhaProfissionalValid

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

export default CadastroProfissionais7;
