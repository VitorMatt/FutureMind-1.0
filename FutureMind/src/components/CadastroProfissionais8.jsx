import { useEffect } from 'react';
import { useState, useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais8() {

    const { user } = useContext(GlobalContext);

    const [preco, setPreco] = useState(user.preco);
    const [message, setMessage] = useState('');

    useEffect(() => {

        if (message=='') user.preco = preco;
    }, [preco]);

  return (
    <div className="selecao1">
      
    <h3 className='titulo-cadastro2'>Seus Dados..</h3>
    <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">Abordagem</label><input type="text" name="file"className="inputCRP" />
    </div>
    <div className="input-text">
      <label htmlFor="">Preço</label>
      <input value={preco} type="number" max='50' min='15' className="inputCRP" onChange={(e) => { setPreco(e.target.value) }}/>
    </div>
    {message}
      </div>
    </div>
  )
}

export default CadastroProfissionais8
