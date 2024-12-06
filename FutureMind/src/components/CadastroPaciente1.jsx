import React, { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import { GlobalContext } from "../GlobalContext/GlobalContext";
import '../pages/CSS/CadastroProfissional.css';


function CadastroPaciente1() {

  const { paciente } = useContext(GlobalContext)

  const [date, setDate] = useState(paciente.data_nascimento);
  const [name, setName] = useState(paciente.nome_completo);
  const {usernameValid, setUsernameValid} = useContext(GlobalContext)
  const {usernameHover, setUsernameHover} = useContext(GlobalContext)
  

setUsernameValid(name.length > 3) 


  useEffect(() => {
    paciente.nome_completo = name;
  }, [name]);

  useEffect(() => {
    paciente.data_nascimento = date;
  }, [date]);


    paciente.data_nascimento = date
  // }, [date])
  

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
            className={usernameValid ? "valid" : name ? "invalid" : "neutro"}
          />
         <span
          className={`status-indicador ${
          usernameValid ? "valid" : name ? "invalid" : ""
         }`}
         onMouseEnter={() => setUsernameHover(true)}
         onMouseLeave={() => setUsernameHover(false)}
         ></span>
         {usernameHover && (

          <div className="tooltip">
            {usernameValid
              ? "nome ok"
              : "nome precisa ter mais de 3 caracter"}
          </div>
         )}
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
          
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente1;