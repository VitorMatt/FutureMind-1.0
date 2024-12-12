import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais8({showError}) {
  const { profissional, setProfissional } = useContext(GlobalContext);
  const { valorValid, setValorValid } = useContext(GlobalContext);
  const {valorHover, setValorHover} = useContext(GlobalContext)

  const [abordagem, setAbordagem] = useState(profissional.abordagem);
  const [valor, setValor] = useState(profissional.preco);

  // Função para aplicar a máscara no preço no formato R$ XX,XX e limitar a 4 caracteres
  const handlePriceMask = (e) => {
    let value = e.target.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Limita a 4 caracteres
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    // Formata como moeda brasileiro
    value = (parseFloat(value) / 100).toFixed(2)

    setValor(value);
  };

  // Validação do preço entre 10.00 e 50.00
  useEffect(() => {
    const numericValue = valor;
    setValorValid(numericValue >= 10.0 && numericValue <= 50.0);
  }, [valor]);

  // Atualiza a abordagem no contexto
  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      abordagem: abordagem, // Atualiza apenas o campo abordagem
    }));
  }, [abordagem, setProfissional]);

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      preco: valor, // Atualiza apenas o campo valor
    }));
  }, [valor, setProfissional]);
  return (
    <div className="selecao1">
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">
        {/* Campo de Abordagem */}
        <div className="input-text">
          <label htmlFor="">Abordagem</label>
          <select
            value={abordagem}
            onChange={(e) => setAbordagem(e.target.value)}
            name="file"
            id=""
            className="inputAbordagem"
          >
            <option name="file" value="Terapia">Terapia</option>
            <option name="file" value="Psicanalista">Psicanalista</option>
            <option name="file" value="Terapia Cognitiva">Terapia Cognitiva</option>
            <option name="file" value="Psicologia Analítica">Psicologia Analítica</option>
            <option name="file" value="Analítico Comportamental">Analítico Comportamental</option>
            <option name="file" value="Psicoterapia Corporal">Psicoterapia Corporal</option>
            <option name="file" value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>
          </select>
        </div>

        {/* Campo de Preço com máscara e limitação */}
        <div className="input-text">
          <label htmlFor="">Preço</label>
          <div className='indicador-geral-div'>
          <input
            type="text"
            value={valor}
            placeholder='xx.xx'
            onChange={handlePriceMask}
            className="inputCRP"
          />
          <div className='span-geral'>
          <span
          className={`status-indicador ${
          !valorValid  ? "invalid" : ""
         }`}
         onMouseEnter={() => setValorHover(true)}
         onMouseLeave={() => setValorHover(false)}
         ></span>
         </div>
         <div className='div_mensagem'>
           { showError || !valorValid && (
           <div
           className="tooltip"
           onMouseEnter={() => setValorHover(true)}
           onMouseLeave={() => setValorHover(false)}
           >
          {valorHover && "Valor precisa ser entre 10 e 50!"}
         </div>
         )}
         </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroProfissionais8;
