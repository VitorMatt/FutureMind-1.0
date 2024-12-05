import './CSS/Profissionais3.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroPaciente3() {
  const { paciente, setPaciente } = useContext(GlobalContext);
  const [email, setEmail] = useState(paciente.email);
  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha, setSenha] = useState(paciente.senha);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");

  // Função de validação
  const validateInputs = () => {
    let valid = true;

    // Validação de email
    if (!email || !email.includes('@')) {
      setErrorEmail("E-mail inválido.");
      valid = false;
    } else {
      setErrorEmail(""); // Limpa o erro se válido
    }

    // Validação de senha
    if (!senha || senha.length < 1 || senha.length > 10) {
      setErrorSenha("A senha deve ter entre 1 e 10 caracteres.");
      valid = false;
    } else {
      setErrorSenha(""); // Limpa o erro se válido
    }

    return valid;
  };

  // Atualiza o estado global somente quando o valor for alterado
  useEffect(() => {
    // Atualiza o estado global somente se o valor de email ou senha foi modificado
    setPaciente(prevPaciente => ({
      ...prevPaciente,
      email: email,
      senha: senha
    }));
  }, [email, senha, setPaciente]); // A dependência agora é o email e senha

  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>
      <div className="checkboxs2">
        {/* Input de E-mail */}
        <div className="input-text">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            className="inputCRP"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Altera somente o estado local
          />
          {errorEmail && <div className="error-message">{errorEmail}</div>} {/* Exibe erro de email */}
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
          {errorSenha && <div className="error-message">{errorSenha}</div>} {/* Exibe erro de senha */}
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
