import './CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Login() {
  // Gerencia a navegação entre páginas
  const navigate = useNavigate();

  // Gerencia a visibilidade da senha
  const [olhosSenha, setOlhosSenha] = useState(false);

  // Função para definir o estado do usuário globalmente
  const { setUser } = useContext(GlobalContext);

  // Estado para armazenar os valores do formulário
  const [form, setForm] = useState({ email: '', senha: '' });

  // Validações dos campos de entrada
  const [validations, setValidations] = useState({
    email: { valid: true },
    senha: { valid: true },
  });

  // Função para validar os campos do formulário
  const validateField = (field, value) => {
    if (field === 'email') {
      if (!value) {
        setValidations((prev) => ({
          ...prev,
          email: { valid: false, message: 'Por favor, preencha o campo de email.' },
        }));
      } else if (!value.includes('@gmail.com' || '@yahoo.com')) {
        setValidations((prev) => ({
          ...prev,
          email: { valid: false, message: 'Email inválido' },
        }));
      } else {
        setValidations((prev) => ({
          ...prev,
          email: { valid: true },
        }));
      }
    } else if (field === 'senha') {
      if (!value) {
        setValidations((prev) => ({
          ...prev,
          senha: { valid: false, message: 'Por favor, preencha o campo de senha.' },
        }));
      } else if (value.length < 8) {
        setValidations((prev) => ({
          ...prev,
          senha: { valid: false, message: 'Senha inválida' },
        }));
      } else {
        setValidations((prev) => ({
          ...prev,
          senha: { valid: true },
        }));
      }
    }
  };

  // Função para gerenciar o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se há erros de validação antes de enviar
    if (!validations.email.valid || !validations.senha.valid) {
      return; // Impede o envio caso a validação esteja errada
    }

    try {
      // Envia os dados do formulário para o backend
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Login bem-sucedido, armazena dados do usuário
        const data = await response.json();
        localStorage.setItem('User', JSON.stringify(data));
        setForm({ email: '', senha: '' });

        // Define se o usuário é um profissional
        const isProfissional = data.id_profissional ? true : false;
        setUser({ logado: true, profissional: isProfissional });

        // Redireciona para a página inicial
        navigate('/');
      } else {
        // Exibe mensagens de erro caso o login falhe
        const errorData = await response.json();
        setValidations((prev) => ({
          ...prev,
          email: { valid: false, message: errorData.message },
          senha: { valid: false, message: errorData.message },
        }));
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setValidations((prev) => ({
        ...prev,
        email: { valid: false, message: 'Erro de conexão, tente novamente mais tarde.' },
        senha: { valid: false, message: 'Erro de conexão, tente novamente mais tarde.' },
      }));
    }
  };

  return (
    <div className="login-container">
      {/* Lado esquerdo da página, contém o formulário de login */}
      <div className="Lado-esquerdo">
        <h3 className="titulo-login">Bem-vindo ao seu espaço</h3>
        <div className="input_principais">
          <div className="inputsLogin">
            <label>Email</label>
            <div className="input-wrapper">
              {/* Campo de entrada para email */}
              <input
                type="text"
                value={form.email}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, email: e.target.value }));
                  validateField('email', e.target.value);
                }}
              />
              <span
                className={`validation-dot ${validations.email.valid ? 'valid' : 'invalid'}`}
                title={validations.email.message}
              ></span>
            </div>
          </div>

          <div className="inputsLogin">
            <label>Senha</label>
            <div className="input-wrapper">
              {/* Campo de entrada para senha */}
              <input
                type={olhosSenha ? 'text' : 'password'}
                value={form.senha}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, senha: e.target.value }));
                  validateField('senha', e.target.value);
                }}
              />
              <span
                className={`validation-dot ${validations.senha.valid ? 'valid' : 'invalid'}`}
                title={validations.senha.message}
              ></span>
              <button
                onClick={() => setOlhosSenha(!olhosSenha)}
                className="olhos-login"
              >
                {/* Alterna entre mostrar/esconder senha */}
                {form.senha.length > 0 && (
                  <img
                    src={olhosSenha ? 'olhoAberto.svg' : 'olhoFechado.svg'}
                    alt="Mostrar/Esconder Senha"
                  />
                )}
              </button>
            </div>
          </div>

          <div className="caminho-cadastro">
            <label className="label-login">Não Possui Cadastro?</label>
            {/* Link para a página de cadastro */}
            <Link to="/cadastro" className="link-para-cadastro">
              Aperte aqui
            </Link>
          </div>
          <div className="botao-login">
            <button className="botao-estilizado" onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </div>
      </div>

      {/* Lado direito da página, contém a logo */}
      <div className="lado-Direito">
        <div className="arvore2">
          <img src="logoLogin.png" alt="" className="arvore-estilizada" />
        </div>
      </div>
    </div>
  );
}

export default Login;
