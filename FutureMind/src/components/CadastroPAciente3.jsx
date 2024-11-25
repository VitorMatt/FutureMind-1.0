import './CSS/Profissionais3.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroPaciente3() {

  const { paciente } = useContext(GlobalContext);
  const [email, setEmail] = useState(paciente.email);
  const [olhosSenha, setOlhosSenha] = useState(false);
  const [senha, setSenha] = useState(paciente.senha);

  useEffect(() => {
    paciente.email = email;
  }, [email]);

  useEffect(() => {
    paciente.senha = senha;
  }, [senha]);

  // Validação da senha
  const requisitos = [
    { label: '8 caracteres ou mais', valid: senha.length >= 8 },
  ];


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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-text">
          <label htmlFor="senha">Crie sua Senha</label>
          <div className="olho-div">
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
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
            <div className="password-requirements">
  {senha.length > 0 && (
    <ul>
      {requisitos.map((req, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: req.valid ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
          style={{
            color: req.valid ? 'white' : 'red',
            listStyle: 'none',
          }}
        >
          {req.label}
        </motion.li>
      ))}
    </ul>
  )}
</div>
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