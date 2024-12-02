import React, { useState, useRef } from "react";
import "./CSS/Test_tres.css";

const Agenda = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventPosition, setEventPosition] = useState({ top: 0, left: 0 });
  const agendaRef = useRef(null);

  // Exemplo de eventos
  const events = [
    {
      id: 1,
      date: "2024-12-05",
      title: "SALA DE CONVIVÊNCIA G&C",
      time: "O dia inteiro",
      description: "Agenda recorrente às quintas-feiras.",
      attendees: 51,
    },
    {
      id: 2,
      date: "2024-12-10",
      title: "Weekly Matutina",
      time: "11:00",
      description: "Reunião semanal para alinhamentos.",
    },
    {
      id: 3,
      date: "2024-12-12",
      title: "Vamos Celebrar 2024!",
      time: "14:00",
      description: "Evento especial para celebrar o ano novo.",
    },
    {    
        id:4,
        date: "2024-12-10",
        title:"vamos Celebrar 2024!",
        escription: "Evento especial para celebrar o ano novo.",
    },
    {    
        id:5,
        date: "2024-12-10",
        title:"vamos Celebrar 2024!",
        escription: "Evento especial para celebrar o ano novo.",
    }
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleEventClick = (event, e) => {
    const agendaRect = agendaRef.current.getBoundingClientRect();
    const eventRect = e.target.getBoundingClientRect();

    // Calcula a posição da div de detalhes ao lado do evento clicado
    setEventPosition({
      top: eventRect.top - agendaRect.top + eventRect.height / 2,
      left: eventRect.right - agendaRect.left + 10,
    });
    setSelectedEvent(event);
  };

  return (
    <div className="agenda-container" ref={agendaRef}>
      {/* Área do calendário */}
      <div className="calendar">
        <header className="calendar-header">
          <h2>Dezembro 2024</h2>
        </header>
        <div className="calendar-grid">
          {daysInMonth.map((day) => {
            const date = `2024-12-${String(day).padStart(2, "0")}`;
            const dayEvents = events.filter((event) => event.date === date);

            return (
              <div key={day} className="calendar-day">
                <span className="day-number">{day}</span>
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="event-card"
                    onClick={(e) => handleEventClick(event, e)}
                  >
                    <h4>{event.title}</h4>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detalhes do evento */}
      {selectedEvent && (
      <div className="detalhes-agendamento">
          <div className="detalhes-conteudo">
            <h2>Detalhes do Agendamento</h2>
            <p><strong>Paciente:</strong> {selectedAgendamento.paciente}</p>
            <p><strong>Data:</strong> {selectedAgendamento.data}</p>
            <p><strong>Horário:</strong> {selectedAgendamento.horario}</p>
            <p><strong>Detalhes:</strong> {selectedAgendamento.detalhes}</p>
            <button onClick={handleCloseDetails} className="fechar-detalhes">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agenda;
