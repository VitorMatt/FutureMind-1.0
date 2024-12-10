import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais8() {
  const { profissional } = useContext(GlobalContext);
  const { valorValid, setValorValid } = useContext(GlobalContext);
  const {valorHover, setValorHover} = useContext(GlobalContext)

  const [abordagem, setAbordagem] = useState(profissional.abordagem);
  const [valor, setValor] = useState('');

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
    value = (parseFloat(value) / 100).toFixed(2).replace('.', ',');

    setValor(value);
  };

  // Validação do preço entre 10.00 e 50.00
  useEffect(() => {
    const numericValue = parseFloat(valor.replace(',', '.'));
    setValorValid(numericValue >= 10.0 && numericValue <= 50.0 && !isNaN(numericValue));
  }, [valor]);

  // Atualiza a abordagem no contexto
  useEffect(() => {
    profissional.abordagem = abordagem;
  }, [abordagem]);

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
          <input
            type="text"
            value={valor}
            placeholder='xx.xx'
            onChange={handlePriceMask}
            className="inputCRP"
          />
          <span
          className={`status-indicador ${
          valorValid ? "valid" :  valor ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setValorHover(true)}
         onMouseLeave={() => setValorHover(false)}
         ></span>
         {valorHover && (

          <div className="tooltip">
            {valorValid

              ? "Valor valido"
              : "Valor precisa estar entre 10 e 50 "
          
              }
          </div>
         )}
        </div>
      </div>
    </div>
  );
}

export default CadastroProfissionais8;
