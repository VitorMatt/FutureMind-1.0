import React, { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Portuguese } from "flatpickr/dist/l10n/pt";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import '../pages/CSS/CadastroProfissional.css';

function CadastroPaciente1({ showError }) { // showError controlado pelo botão "Próximo"
  const { paciente, setPaciente } = useContext(GlobalContext);

  const [date, setDate] = useState(paciente.data_nascimento);
  const [name, setName] = useState(paciente.nome_completo);
  const { usernameValid, setUsernameValid } = useContext(GlobalContext);
  const { usernameHover, setUsernameHover } = useContext(GlobalContext);
  const { data_nascimentoValid, setData_nascimentoValid } = useContext(GlobalContext);
  const { data_nascimentoHover, setData_nascimentoHover } = useContext(GlobalContext);

  useEffect(() => {
    setUsernameValid(name.length > 3);
  }, [name, setUsernameValid]);

  useEffect(() => {
    if (date) {
      const hoje = new Date();
      const idade = hoje.getFullYear() - date.getFullYear();
      const mesAtual = hoje.getMonth();
      const mesNascimento = date.getMonth();
      const diaAtual = hoje.getDate();
      const diaNascimento = date.getDate();

      const temMenosDe18Anos =
        idade < 18 ||
        (idade === 18 && mesAtual < mesNascimento) ||
        (idade === 18 && mesAtual === mesNascimento && diaAtual < diaNascimento);

      setData_nascimentoValid(!temMenosDe18Anos);
    }
  }, [date, setData_nascimentoValid]);

  useEffect(() => {
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      nome_completo: name,
    }));
  }, [name, setPaciente]);

  useEffect(() => {
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      data_nascimento: date,
    }));
  }, [date, setPaciente]);

  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>
      <div className="checkboxs2">
        {/* Campo Nome */}
        <div className="input-text">
          <label htmlFor="nome">Nome Completo</label>
          <div className="indicador-geral-div">
            <input
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputCRP"
            />
            <div className="span-geral">
              {/* Bolinha vermelha lógica para o nome */}
              <span
                className={`status-indicador ${
                  (name.length <= 3 ) || (showError && !usernameValid) ? "invalid" : ""
                }`}
                onMouseEnter={() => setUsernameHover(true)}
                onMouseLeave={() => setUsernameHover(false)}
              ></span>
            </div>
            <div className="div_mensagem">
              { showError || !usernameValid  && (
                <div
                  className="tooltip"
                  onMouseEnter={() => setUsernameHover(true)}
                  onMouseLeave={() => setUsernameHover(false)}
                >
                  { usernameHover && "Nome precisa ter mais de 3 caracteres"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Campo Data de Nascimento */}
        <div className="input-text">
          <label htmlFor="data">Data de Nascimento</label>
          <div className="indicador-geral-div">
            <Flatpickr
              options={{
                locale: Portuguese,
                dateFormat: "y/m/d",
                defaultDate: "today",
              }}
              value={date}
              onChange={(selectedDates) => setDate(selectedDates[0])}
              className="inputAlternativo"
            />
            <div className="span-geral">
              {/* Bolinha vermelha lógica para a data de nascimento */}
              <span
                className={`status-indicador ${
                  !data_nascimentoValid || ( showError && !data_nascimentoValid ) ? "invalid" : ""
                }`}
                onMouseEnter={() => setData_nascimentoHover(true)}
                onMouseLeave={() => setData_nascimentoHover(false)}
              >
              </span>
            </div>
            <div className="div_mensagem">
              { showError || !data_nascimentoValid && (
                <div
                  className="tooltip"
                  onMouseEnter={() => setData_nascimentoHover(true)}
                  onMouseLeave={() => setData_nascimentoHover(false)}
                >
                  {data_nascimentoHover && "Você precisa ter mais de 18 anos"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente1;
