import React, { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import { GlobalContext } from "../GlobalContext/GlobalContext";

function CadastroPaciente1({ paciente, setErrors, errors }) {
  
  const [date, setDate] = useState(paciente.data_nascimento);
  const [name, setName] = useState(paciente.nome_completo);
  const [message, setMessage] = useState('preencha')
  useEffect(() => {
    paciente.nome_completo = name;
  }, [name]);

  useEffect(() => {
    paciente.data_nascimento = date;
  }, [date]);

    paciente.data_nascimento = date
  // }, [date])
  

  function validar(item) {
    
    if (item.length===0) setMessage('preencha'); else setMessage('')

  }
  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>
      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputCRP"
          />
          {errors.nome && <p className="error-text">{errors.nome}</p>}
          <input type="text" name="nome" value={name} onChange={(e) => {setName(e.target.value),validar(e.target.value)}} className="inputCRP" /> {message}
        </div>
        <div className="input-text">
          <label htmlFor="data">Data de Nascimento</label>
          <Flatpickr
            options={{
              locale: Portuguese,
              dateFormat: "d/m/Y",
              defaultDate: "today",
            }}
            value={date}
            onChange={(selectedDates) => setDate(selectedDates[0])}
            className="inputCRP"
          />
          {errors.data_nascimento && (
            <p className="error-text">{errors.data_nascimento}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente1;