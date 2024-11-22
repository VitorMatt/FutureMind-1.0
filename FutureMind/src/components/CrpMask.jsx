import React, { useContext, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const CrpMask = ({ onCrpChange }) => {
    const {user} = useContext (GlobalContext)
   const [crp, setCrp] = useState(user.crp);

  useEffect(() => {
    user.crp = crp
  }, [crp]);

  const handleChange = (e) => {
    const maskedValue = e.target.value;
    setCrp(maskedValue);

  };

  return (
    <div>
      <InputMask
        mask="99/999999"
        value={crp}
        onChange={handleChange}
        placeholder="00/000000"
        id="crp"
        className='inputCRP'
      >
        {(inputProps) => <input {...inputProps} />}
      </InputMask>
    </div>
  );
};

export default CrpMask;
