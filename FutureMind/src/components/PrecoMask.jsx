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

  const handleChange = (e) => {
    const maskedValue = e.target.value;
    setPreco(maskedValue);
  };

  return (
    <div>
      <InputMask
        mask="00.00"
        value={preco}
        onChange={handleChange}
        placeholder="00.00"
        id="preco"
        className='inputCRP'
      >
        {(inputProps) => <input {...inputProps} />}
      </InputMask>
    </div>
  );
};

export default PrecoMask;
