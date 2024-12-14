import './CSS/Profissionais3.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroPaciente3({showError}) {

  const { paciente, setPaciente } = useContext(GlobalContext);
  const [email, setEmail] = useState(paciente.email);
  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha, setSenha] = useState(paciente.senha);
  const {emailValid, setEmailValid} = useContext(GlobalContext)
  const {emailHover, setEmailHover} = useContext(GlobalContext)
  const {senhaValid, setSenhaValid} = useContext(GlobalContext)
  const {senhaHover, setSenhaHover} = useContext(GlobalContext)
  const {checkbox_cheked, setcheckbox_cheked} = useState(GlobalContext)
  
  setEmailValid(email.includes("@gmail") )
  setSenhaValid(senha.length >= 8)

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      email: email, // Atualiza apenas o campo email
    }));
  }, [email, setPaciente]);

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      senha: senha, // Atualiza apenas o campo senha
    }));
  }, [senha, setPaciente]);
  
  const pegar_valor =(event) => {

    setcheckbox_cheked(event.target.checked)
  }

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
          className={`status-indicador ${ showError  ||  !emailValid ? "invalid" : ""
         }`}
         onMouseEnter={() => setEmailHover(true)}
         onMouseLeave={() => setEmailHover(false)}
         ></span>
         </div>
         <div className="div_mensagem">
          {showError || !emailValid && (
          <div
          className="tooltip"
          onMouseEnter={() => setEmailHover(true)}
          onMouseLeave={() => setEmailHover(false)}
          >
          {emailHover && "O email precisa conter um @"}
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
              className="inputAlternativo"
            />
            <div className='conatiner_bolinha'>
            <div className='div_mensagem'>
            {showError || !senhaValid && (
            <div
              className="tooltip"
              onMouseEnter={() => setSenhaHover(true)}
              onMouseLeave={() => setSenhaHover(false)}
             >
             {senhaHover && "Senha precisa ter entre 8 e 10 caracteres"}
            </div>
          
          )}
          </div>
            <div className='span-geral'>
             <span
               className={`status-indicador ${ showError || !senhaValid ? "invalid" : ""
               }`}
               onMouseEnter={() => setSenhaHover(true)}
               onMouseLeave={() => setSenhaHover(false)}
               ></span>
             </div>
           
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
        <input  
        type="checkbox" 
        id="aceitar-termos" 
        className={pegar_valor == true ? 'invalid' : "valid"}
        onChange={pegar_valor}/>
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
