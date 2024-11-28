import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const CpfInput = ({ onCpfChange }) => {

    const { profissional } = useContext(GlobalContext);
    const [cpf, setCpf] = useState(profissional.cpf);

    useEffect(() => {

        profissional.cpf = cpf;
    }, [cpf]);

  const InputCPFmascara = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 

    setCpf(value);
    onCpfChange(value.replace(/\D/g, '')); 
  };

  return (
    <div>
      <input
        type="text"
        id="cpf"
        maxLength="14"
        placeholder="000.000.000-00"
        value={cpf}
        onChange={InputCPFmascara}
        className='inputCRP'
      />
    </div>
  );
};

export default CpfInput;