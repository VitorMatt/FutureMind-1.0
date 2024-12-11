import React, { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import { GlobalContext } from "../GlobalContext/GlobalContext";
import '../pages/CSS/CadastroProfissional.css';


function CadastroPaciente1() {

  const { paciente, setPaciente } = useContext(GlobalContext)

  const [date, setDate] = useState(paciente.data_nascimento);
  const [name, setName] = useState(paciente.nome_completo);
  const {usernameValid, setUsernameValid} = useContext(GlobalContext)
  const {usernameHover, setUsernameHover} = useContext(GlobalContext)
  const {data_nascimentoValid, setData_nascimentoValid} = useContext(GlobalContext)
  const {data_nascimentoHover, setData_nascimentoHover} = useContext(GlobalContext)
  
 setUsernameValid(name.length > 3) 
 if(date > 1){

  const hoje = new Date();
  const idade = hoje.getFullYear() - date.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = date.getMonth();
  const diaAtual = hoje.getDate();
  const diaNascimento = date.getDate();

  // Verificação de se o usuário tem menos de 18 anos
  const temMenosDe18Anos =
    idade < 18 ||
    (idade === 18 && mesAtual < mesNascimento) ||
    (idade === 18 && mesAtual === mesNascimento && diaAtual < diaNascimento);
    setData_nascimentoValid(!temMenosDe18Anos)
    
 }
 

 useEffect(() => {
  // Atualiza o contexto global sempre que o CRP muda
  setPaciente((prevPaciente) => ({
    ...prevPaciente,
    nome_completo: name, // Atualiza apenas o campo name
  }));
}, [name, setPaciente]);

useEffect(() => {
  // Atualiza o contexto global sempre que o CRP muda
  setPaciente((prevPaciente) => ({
    ...prevPaciente,
   data_nascimento: date, // Atualiza apenas o campo name
  }));
}, [date, setPaciente]);



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
          
         <span
          className={`status-indicador ${
          usernameValid ? "valid" :  name ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setUsernameHover(true)}
         onMouseLeave={() => setUsernameHover(false)}
         ></span>
         {usernameHover && (

          <div className="tooltip">
            {usernameValid

              ? "Nome ok"
              : "Nome Precisa Ter Mais De 3 Caracter e ter um valor "
          
              }
          </div>
         )}
        </div>
        <div className="input-text">
          <label htmlFor="data">Data de Nascimento</label>
          <Flatpickr
            options={{
              locale: Portuguese,
              dateFormat: "y/m/d",
              defaultDate: "today",
            }}

            value={date}
            onChange={(selectedDates) => setDate(selectedDates[0])}
            className="inputCRP"
          />
            <span
          className={`status-indicador ${
          data_nascimentoValid ? "valid" :  date ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setData_nascimentoHover(true)}
         onMouseLeave={() => setData_nascimentoHover(false)}
         ></span>
         {data_nascimentoHover && (

         <div className="tooltip">
         {data_nascimentoValid

         ? "data ok"
         : "Você precisa ter mais de 18 anos "

         }
         </div>
         )}
          
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente1;