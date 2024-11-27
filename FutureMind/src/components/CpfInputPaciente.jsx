import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const CpfInput = ({ onCpfChange }) => {

    const { paciente } = useContext(GlobalContext);
    const [cpf, setCpf] = useState(paciente.cpf);

    useEffect(() => {

        paciente.cpf = cpf;
    }, [cpf]);

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove não numéricos
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Primeiro ponto
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Traço

    setCpf(value);
    onCpfChange(value.replace(/\D/g, '')); // Passa o CPF limpo para o backend
  };

  return (
    <div>
      <input
        type="text"
        id="cpf"
        maxLength="14"
        placeholder="000.000.000-00"
        value={cpf}
        onChange={handleInputChange}
        className='inputCRP'
      />
    </div>
  );
};

export default CpfInput;