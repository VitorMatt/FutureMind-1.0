import React, { useState } from "react";

const Agenda = () => {
  const [consultas, setConsultas] = useState([
    { id: 1, paciente: "João Silva", horario: "10:00" },
    { id: 2, paciente: "Maria Oliveira", horario: "11:00" },
    { id: 3, paciente: "Carlos Santos", horario: "14:00" },
  ]);

  const excluirConsulta = (id) => {
    const novasConsultas = consultas.filter((consulta) => consulta.id !== id);
    setConsultas(novasConsultas);
  };

  return (
    <div>
      <h1>Agenda de Consultas</h1>
      {consultas.length > 0 ? (
        <ul>
          {consultas.map((consulta) => (
            <li key={consulta.id}>
              <strong>Paciente:</strong> {consulta.paciente} | <strong>Horário:</strong> {consulta.horario}
              <button onClick={() => excluirConsulta(consulta.id)} style={{ marginLeft: "10px" }}>
                Excluir
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma consulta agendada.</p>
      )}
    </div>
  );
};

export default Agenda;
