import { useState } from 'react';
import './CSS/EscolhaCadastro.css';
import { useNavigate } from 'react-router-dom';


function EscolhaCadastro() {

  const escolhas = ['Sou Paciente','Sou Profissional'];
  const [escolhaCadastro, setEscolhaCadastro] = useState('');
  const navigate = useNavigate();


  const aperta = (escolha) => {
    setEscolhaCadastro(escolha);
  };

  function direcionaCadastro() {
    if (escolhaCadastro === 'Sou Profissional') {
      navigate('/cadastro-profissional');
    } else if (escolhaCadastro === 'Sou Paciente') {
      navigate('/cadastro-paciente');
    }
  }

  return (
    <div className='escolhaCadastro-container'>
      <div className='Lado-esquerdo'>
        <h3 className='titulo-Cadastro'>Selecione um tipo de cadastro:</h3>
        <div className='login'>
          <div className='div-login'>
            <div className="logins">
              {escolhas.map((escolha) => (
                <span
                  key={escolha}
                  className={`escolhas ${escolhaCadastro === escolha ? 'selected' : 'plogin'}`}
                  onClick={() => aperta(escolha)}
                >
                  {escolha}
                </span>
              ))}
            </div>
            <div className='botoes-login'>
              <div className='botao-l1'>
                <button className='escolha-estilizado'>Entrar</button>
              </div>
              <div className='botao-l2'>
                <button onClick={direcionaCadastro} className='escolha-estilizado'>Próximo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lado-Direito'>
        <div className='arvore-escolha'>
          <img src='logoLogin.png' alt="" className='arvore-estilizada' />
        </div>
      </div>
    </div>
  );
}

export default EscolhaCadastro;