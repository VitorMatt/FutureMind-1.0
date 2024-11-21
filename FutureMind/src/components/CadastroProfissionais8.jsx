import { useEffect } from 'react';
import { useState, useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais8() {

    const { user } = useContext(GlobalContext);

    const [preco, setPreco] = useState(user.preco);
    const [abordagem, setAbordagem] = useState(user.abordagem);
    const [message, setMessage] = useState('');

    useEffect(() => {

        if (preco>=10 && preco<=50) {

          user.preco = preco;
        } else {

          setMessage('Valor inválido! (Entre 10 e 50)');
        }
    }, [preco]);


    useEffect(() => {

      user.abordagem = abordagem;
  }, [abordagem]);

  return (
    <div className="selecao1">
      
    <h3 className='titulo-cadastro2'>Seus Dados..</h3>
    <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">Abordagem</label><input value={abordagem} onChange={(e) => { setAbordagem(e.target.value) }} type="text" name="file"className="inputCRP" />
    </div>
    <div className="input-text">
      <label htmlFor="">Preço</label>
      <input value={preco} type="number" max='50' min='15' className="inputCRP" onChange={(e) => { setPreco(e.target.value) }}/>
    </div>
    <p>
    {message}
    </p>
      </div>
    </div>
  )
}

export default CadastroProfissionais8
