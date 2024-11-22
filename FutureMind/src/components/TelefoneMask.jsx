import React, { useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const TelefoneMask = ({ onTelefoneChange }) => {
    const {profissional} = useContext (GlobalContext)
  const [telefone, setTelefone] = useState(profissional.telefone);

  useEffect(() => {
    profissional.telefone = telefone
  }, [telefone]);

  const handleChange = (e) => {
    const maskedValue = e.target.value;
    setTelefone(maskedValue);

  };

  return (
    <div>
      <InputMask
        mask="(99) 99999-9999"
        value={telefone}
        onChange={handleChange}
        placeholder="(00) 00000-0000"
        id="telefone"
        className='inputCRP'
      >
        {(inputProps) => <input {...inputProps} />}
      </InputMask>
    </div>
  );
};

export default TelefoneMask;
