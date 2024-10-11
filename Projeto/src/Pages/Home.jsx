import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./CSS/Home.css";

// Função utilitária para calcular os dias da semana a partir de uma data de início
const getWeekDays = (startDate) => {
  const days = [];
  const current = new Date(startDate);
  for (let i = 0; i < 5; i++) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};

// Simulação dos horários disponíveis para cada dia
const horariosDisponiveis = {
  "07:00": true,
  "07:30": true,
  "08:00": true,
  "08:30": true,
  "09:00": true,
};

function Home() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date()); // Inicializa com a semana atual

  // Função para formatar data
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Dias da semana com base na data de início da semana
  const diasSemana = getWeekDays(currentWeekStart);

  // Manipula a navegação para a semana anterior
  const handlePreviousWeek = () => {
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newStartDate);
  };

  // Manipula a navegação para a próxima semana
  const handleNextWeek = () => {
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newStartDate);
  };

  const handleAgendamento = () => {
    if (selectedDate && selectedTime) {
      alert(`Agendado para ${selectedDate} às ${selectedTime}`);
    }
  };

  return (
    <>
    <NavBar />
    <div className="App">
      <div className="profile">
        <h2>Eloiza Camargo Dalmolin</h2>
        <p>CRP 12/26214</p>
        <p>
          Psicóloga clínica com experiência em atendimentos de ansiedade,
          depressão, luto, conflitos familiares, e autoestima.
        </p>
        <h3>R$165 - 50 min</h3>
        <div className="rating">⭐⭐⭐⭐⭐ (49)</div>
        <p>769 consultas realizadas</p>

        <h3>Agendamento</h3>
        <div className="agenda">

<div className="botao">

          <div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}>Semana Anterior</button>
            <span>Semana de {formatDate(diasSemana[0])}</span>
            <button onClick={handleNextWeek}>Próxima Semana</button>
          </div>

          <table>
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" })}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div>


        <button 
          id="agendar"
          onClick={handleAgendamento}
          disabled={!selectedTime}
          >
          {selectedTime
            ? `Agendar para ${selectedTime}`
            : "Selecione um horário"}
        </button>
            </div>
            </div>
      </div>
    </div>
            </>
  );
}

export default Home;