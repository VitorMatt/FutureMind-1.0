import React, { useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const CrpMask = ({ onCrpChange }) => {
  const { profissional } = useContext(GlobalContext);
  const [crp, setCrp] = useState(profissional.crp || ''); // Inicializa com o valor ou vazio
  const { crpValid, setCrpValid } = useContext(GlobalContext);
  const { crpHover, setCrpHover } = useContext(GlobalContext);

  // Estado para verificar se o usuário começou a digitar
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    // Verifica se o CRP é válido (9 caracteres e no formato correto)
    const regex = /^\d{2}\/\d{6}$/;
    setCrpValid(regex.test(crp)); // Atualiza crpValid com base na validação
  }, [crp, setCrpValid]);

  useEffect(() => {
    // Atualiza o CRP no objeto profissional
    profissional.crp = crp;
  }, [crp, profissional]);

  const handleChange = (e) => {
    const maskedValue = e.target.value;
    setCrp(maskedValue);

    // Marca que o usuário começou a digitar, se ainda não tiver feito
    if (!hasStartedTyping && maskedValue !== '') {
      setHasStartedTyping(true);
    }
  };

  return (
    <div>
      <InputMask
        mask="99/999999"
        value={crp}
        onChange={handleChange}
        placeholder="00/000000"
        id="crp"
        className="inputCRP"
      >
        {(inputProps) => <input {...inputProps} />}
      </InputMask>

      {/* A bolinha vermelha ou verde só aparece se o usuário começou a digitar */}
      {hasStartedTyping && (
        <span
          className={`status-indicador ${crpValid ? 'valid' : 'invalid'}`} // Define a classe conforme crpValid
          onMouseEnter={() => setCrpHover(true)}
          onMouseLeave={() => setCrpHover(false)}
        ></span>
      )}

      {/* Tooltip só aparece quando o CRP é inválido */}
      {crpHover && !crpValid && crp !== '' && (
        <div className="tooltip">
          "CRP inválido"
        </div>
      )}
    </div>
  );
};

export default CrpMask;
