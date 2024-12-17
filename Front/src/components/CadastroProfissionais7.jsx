import './CSS/Profissionais3.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais7({showError}) {

  const { profissional} = useContext(GlobalContext);
  const [email, setEmail] = useState(profissional.email);
  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha, setSenha] = useState(profissional.senha);
  const {emailProfissionalValid, setEmailProfissionalValid} = useContext(GlobalContext)
  const {emailProfissionalHover, setEmailProfissonalHover} = useContext(GlobalContext)
  const {senhaProfissionalValid, setSenhaProfissionalValid} = useContext(GlobalContext)
  const {senhaProfissionalHover, setSenhaProfissionalHover} = useContext(GlobalContext)

  setEmailProfissionalValid(email.includes("@gmail") )
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
          <div className='indicador-geral-div'>
          <input
            type="email"
            name="email"
            className="inputCRP"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Altera somente o estado local
          />
          <div className='span-geral'>
         <span
          className={`status-indicador ${
          !emailProfissionalValid ? "invalid" : ""
         }`}
         onMouseEnter={() => setEmailProfissonalHover(true)}
         onMouseLeave={() => setEmailProfissonalHover(false)}
         ></span>
         </div>
         <div className='div_mensagem'>
         {showError || !emailProfissionalValid && (
          <div
          className="tooltip"
          onMouseEnter={() => setEmailProfissonalHover(true)}
          onMouseLeave={() => setEmailProfissonalHover(false)}
          >
          {emailProfissionalHover && "O email precisa conter um @gmail"}
         </div>
         )}
         </div>
         </div>
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
            <div className='span-geral'>
             <span
              className={`status-indicador ${
              !senhaProfissionalValid ? "invalid" : ""
              }`}
              onMouseEnter={() => setSenhaProfissionalHover(true)}
               onMouseLeave={() => setSenhaProfissionalHover(false)}
               ></span>
               </div>
               <div className='div_mensagem'>
               {showError || !senhaProfissionalValid && (
               <div
                className="tooltip"
                onMouseEnter={() => setSenhaProfissionalHover(true)}
               onMouseLeave={() => setSenhaProfissionalHover(false)}
                >
               {!setSenhaProfissionalHover && "Senha precisa ter entre 8 e 10 caracteres"}
               </div>
               )}
              </div>
            
            
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
