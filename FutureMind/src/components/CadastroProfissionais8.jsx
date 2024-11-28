import { useEffect } from 'react';
import { useState, useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext';
import PrecoMask from './PrecoMask';

function CadastroProfissionais8() {

    const { profissional } = useContext(GlobalContext);

    const [abordagem, setAbordagem] = useState(profissional.abordagem);


    useEffect(() => {

      profissional.abordagem = abordagem;
  }, [abordagem]);

  return (
    <div className="selecao1">
      
    <h3 className='titulo-cadastro2'>Seus Dados..</h3>
    <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">Abordagem</label>
      <select value={abordagem} onChange={(e) => { setAbordagem(e.target.value)}} name="file" id="" className="inputAbordagem">
        <option name="file" value="Terapia">Terapia</option>
        <option name="file" value="Psicanalista">Psicanalista</option>
        <option name="file" value="Terapia Cognitiva">Terapia Cognitiva</option>
        <option name="file" value="Psicologia Analítica">Psicologia Analítica</option>
        <option name="file" value="Analítico Comportamental">Analítico Comportamental</option>
        <option name="file" value="Psicoterapia Corporal">Psicoterapia Corporal</option>
        <option name="file" value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>

      </select>
      
      {/* <input value={abordagem} onChange={(e) => { setAbordagem(e.target.value) }} type="text" name="file" className="inputCRP" /> */}
    </div>
    <div className="input-text">
      <label htmlFor="">Preço</label>
      <PrecoMask />
    </div>
      </div>
    </div>
  )
}

export default CadastroProfissionais8
