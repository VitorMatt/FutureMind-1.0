import React, { useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const CrpMask = ({ showError }) => {
  const { profissional, setProfissional } = useContext(GlobalContext);
  const [crp, setCrp] = useState(profissional.crp || ''); // Inicializa com o valor ou vazio
  const { crpValid, setCrpValid } = useContext(GlobalContext);
  const { crpHover, setCrpHover } = useContext(GlobalContext);

  // Estado para verificar se o usuário começou a digitar
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  useEffect(() => {
    const regex = /^\d{2}\/\d{6}$/;
    setCrpValid(regex.test(profissional.crp));
  }, [profissional.crp]);

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      crp: crp, // Atualiza apenas o campo CRP
    }));
  }, [crp, setProfissional]);

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
      <div className='indicador-geral-div'>
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
      <div className='span-geral'>
     
        <span
          className={`status-indicador ${showError ||  !crpValid ? 'invalid' : ''}`} // Define a classe conforme crpValid
          onMouseEnter={() => setCrpHover(true)}
          onMouseLeave={() => setCrpHover(false)}
        ></span>
      
      </div>
      <div className="div_mensagem">
      {showError || !crpValid && (
          <div
          className="tooltip"
          onMouseEnter={() => setCrpHover(true)}
          onMouseLeave={() => setCrpHover(false)}
          >
          {crpHover && "CRP invalida!"}
         </div>
         )}
      </div>
      </div>
    </div>
  );
};

export default CrpMask;
