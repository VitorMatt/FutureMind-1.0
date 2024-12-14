import { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Portuguese } from "flatpickr/dist/l10n/pt";
import { GlobalContext } from "../GlobalContext/GlobalContext";

function CadastroProfissionais5({ showError }) {
  const { profissional, setProfissional } = useContext(GlobalContext);
  const [name, setName] = useState(profissional.nome_completo);
  const [date, setDate] = useState(profissional.data_nascimento);

  const { nome_profissinalValid, setNomeProfissionalValid } = useContext(GlobalContext);
  const { data_nascimentoProfissionalValid, setData_nascimentoProfissionalValid } = useContext(GlobalContext);
  const { nome_profissinalHover, setNomeProfissionalHover } = useContext(GlobalContext);
  const { data_nascimentoProfissionalHover, setData_nascimentoProfissionalHover } = useContext(GlobalContext);

  // Validação do nome
  useEffect(() => {
    setNomeProfissionalValid(name.length > 3);
  }, [name, setNomeProfissionalValid]);

  // Validação da idade para maiores de 18 anos
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

      setData_nascimentoProfissionalValid(!temMenosDe18Anos);
    } else {
      setData_nascimentoProfissionalValid(false); // Se não existir uma data, considere inválida
    }
  }, [date, setData_nascimentoProfissionalValid]);

  useEffect(() => {
    // Atualiza o contexto global sempre que o nome muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      nome_completo: name,
    }));
  }, [name, setProfissional]);

  useEffect(() => {
    // Atualiza o contexto global sempre que a data muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      data_nascimento: date,
    }));
  }, [date, setProfissional]);

  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>
      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="">Nome Completo</label>
          <div className="indicador-geral-div">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="file"
              className="inputCRP"
            />
            <div className="span-geral">
              <span
                className={`status-indicador ${!nome_profissinalValid ? "invalid" : ""}`}
                onMouseEnter={() => setNomeProfissionalHover(true)}
                onMouseLeave={() => setNomeProfissionalHover(false)}
              ></span>
            </div>
            <div className="div_mensagem">
              {showError || !nome_profissinalValid ? (
                <div
                  className="tooltip"
                  onMouseEnter={() => setNomeProfissionalHover(true)}
                  onMouseLeave={() => setNomeProfissionalHover(false)}
                >
                  {nome_profissinalHover && "Nome precisa ter mais de 3 caracteres"}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="input-text">
          <label htmlFor="">Data de Nascimento</label>
          <div className="indicador-geral-div">
            <Flatpickr
              options={{
                locale: Portuguese,
                dateFormat: "y/m/d",
              }}
              value={date}
              onChange={(selectedDates) => setDate(selectedDates[0])}
              className="inputCRP"
            />
            <div className="span-geral">
              <span
                className={`status-indicador ${
                  !data_nascimentoProfissionalValid || (showError && !data_nascimentoProfissionalValid)
                    ? "invalid"
                    : ""
                }`}
                onMouseEnter={() => setData_nascimentoProfissionalHover(true)}
                onMouseLeave={() => setData_nascimentoProfissionalHover(false)}
              ></span>
            </div>
            <div className="div_mensagem">
              {showError || !data_nascimentoProfissionalValid ? (
                <div
                  className="tooltip"
                  onMouseEnter={() => setData_nascimentoProfissionalHover(true)}
                  onMouseLeave={() => setData_nascimentoProfissionalHover(false)}
                >
                  {data_nascimentoProfissionalHover && "Você precisa ter mais de 18 anos"}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroProfissionais5;
