import React, { useState } from "react";
import "./CSS/TesteAg2.css"; // Arquivo CSS para estilização

// Função para obter os dias úteis da semana
const obterDiasUteis = (dataInicio) => {
  const days = [];
  const atual = new Date(dataInicio);

  // Ajuste para a última segunda-feira
  const dayOfWeek = atual.getDay();
  const offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  atual.setDate(atual.getDate() + offset);

  // Adiciona os cinco dias úteis (segunda a sexta)
  for (let i = 0; i < 5; i++) {
    days.push(new Date(atual));
    atual.setDate(atual.getDate() + 1);
  }

  return days;
};

const Agenda = () => {
  const [atualDate, setatualDate] = useState(new Date());
  const [weekDays, setWeekDays] = useState(obterDiasUteis(new Date()));
  const [appointments, setAppointments] = useState([
    { date: "2024-11-12", patient: "Thalles Lima", time: "15:00", duration: "120min" },
    { date: "2024-11-12", patient: "Luciana Nuss", time: "13:00", duration: "120min" },
    { date: "2023-11-15", patient: "Julia Silva Dias", time: "14:30", duration: "120min" },
  ]);

  const handlePreviousWeek = () => {
    const prevWeek = new Date(atualDate);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setatualDate(prevWeek);
    setWeekDays(obterDiasUteis(prevWeek));
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(atualDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setatualDate(nextWeek);
    setWeekDays(obterDiasUteis(nextWeek));
  };

  return (
    <div className="agenda-container">
      <h2>Agenda</h2>
      <div className="agenda-navigation">
        <button onClick={handlePreviousWeek}>{"<"}</button>
        <span>{atualDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</span>
        <button onClick={handleNextWeek}>{">"}</button>
      </div>

      <div className="week-days">
        {weekDays.map((day, index) => {
          const dayString = day.toISOString().split("T")[0];
          const appointment = appointments.find((appt) => appt.date === dayString);

          return (
            <div key={index} className="day-card">
              <div className="day-header">
                {day.toLocaleDateString("pt-BR", { weekday: "long" }).split("-")[0]} - {day.getDate()}
              </div>
              {appointment ? (
                <div className="appointment-details">
                  <p>{appointment.patient}</p>
                  <p>Data: {appointment.time}</p>
                  <p>Tempo: {appointment.duration}</p>
                </div>
              ) : (
                <div className="no-appointment">Sem agendamento</div>
              )}
            </div>
          );
        })}
      </div>
      oiiiiiii
    </div>
  );
};

export default Agenda;