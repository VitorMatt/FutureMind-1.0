import './CSS/Profissionais3.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais7() {

    const [olhosSenha, setOlhosSenha] = useState(false);
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { user } = useContext(GlobalContext);

    useEffect(() => {

      user.email = email;
    }, [email]);

    useEffect(() => {

      if (senha.length!=8) {

        setMessage('A senha deve conter 8 caracteres!');
      } else {

        user.senha = senha;
      }
    }, [senha]);

    return (
        <div className="selecao1">
      
        <h3 className='titulo-cadastro2'>Seus Dados..</h3>
        <div className="checkboxs2">
  
      <div className="input-text">
        <label htmlFor="">E-mail</label><input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" name="file"className="inputCRP" />
      </div>
      <div className="input-text">
        <label htmlFor="">Crie sua Senha</label>
        <div className='olho-div'>
         <input value={senha} onChange={(e) => { setSenha(e.target.value) }} type={olhosSenha ? 'text' : 'password'} className="inputCRP"/> <button onClick={() => {setOlhosSenha(!olhosSenha)}} className='olho'>
          {
            (senha.length>0) &&
            <img src={olhosSenha ? 'olhoAberto.svg'  : 'olhoFechado.svg'} alt="" />
          }
          </button>
        </div>
        {message}
      </div>
      
        </div>
        <div className='caminho-login'>
          <input type="checkbox" name="" id="" />
         <label htmlFor="" className='label-cadastro'>Aceitar </label><Link to="/termos" className='link-para-termos'>termos</Link>
        </div>
      </div>
    );
}

export default CadastroProfissionais7;