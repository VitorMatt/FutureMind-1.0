import React, { useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const PrecoMask = ({ onPrecoChange }) => {

  const {profissional} = useContext (GlobalContext)
  const [preco, setPreco] = useState(profissional.preco);

  useEffect(() => {

    if (preco>10 && preco<=50) {

        profissional.preco = preco
    }
  }, [preco]);

  const escolhaPreco = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{2})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{2})(\d)/, '$1.$2'); 
    value = value.replace('R', ''); 
    value = value.replace('$', '');
    value = Number(value) 

    setPreco(value);
    onPrecoChange(value.replace(/\D/g, '')); 
  };

  return (
    <div>
      <input
        type="text"
        id="preco"
        maxLength="8"
        placeholder="R$ 00.00"
        value={'R$ ' + preco}
        onChange={escolhaPreco}
        className='inputCRP'
      />
    </div>
  );
};

export default PrecoMask;
