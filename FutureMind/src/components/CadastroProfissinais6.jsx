import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext'
import './CSS/Profissionais3.css'

function CadastroProfissionais6() {

    const [cpf, setCpf] = useState('');
    const [number, setNumber] = useState('');
    const { user } = useContext(GlobalContext);

    useEffect(() => {

      user.cpf = cpf;
    }, [cpf]);

    useEffect(() => {

      user.telefone = number;
    }, [number]);

    return (
      <div className="selecao1">
      
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">CPF</label><input value={cpf} onChange={(e) => { setCpf(e.target.value) }} type="text" name="file"className="inputCRP" />
    </div>
    <div className="input-text">
      <label htmlFor="">Telefone</label><input value={number} onChange={(e) => { setNumber(e.target.value) }} type="text" className="inputCRP"/>
    </div>
      </div>
    </div>
    )
  }
  
  
  
  export default CadastroProfissionais6