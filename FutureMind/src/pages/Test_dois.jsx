import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CSS/PerfilProfissional.css';

function Test_dois() {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [agendamentos, setAgendamentos] = useState([
    { data: "2024-11-12", paciente: "Thalles Lima", horario: "15:00" },
    { data: "2024-11-12", paciente: "Luciana Nuss", horario: "17:30" },
    { data: "2024-11-13", paciente: "Julia Silva Dias", horario: "14:30" },
    { data: "2024-11-25", paciente: "Mateus da Silva", horario: "16:00" },
  ]);

  const [indicesAgendamentos, setIndicesAgendamentos] = useState({}); // Rastrear índice atual de cada dia

  const obterDiasUteis = (dataInicio) => {
    const dias = [];
    const atual = new Date(dataInicio);

    const diaDaSemana = atual.getDay();
    const deslocamento = diaDaSemana === 0 ? -6 : 1 - diaDaSemana;

    atual.setDate(atual.getDate() + deslocamento);

    for (let i = 0; i < 5; i++) {
      dias.push(new Date(atual));
      atual.setDate(atual.getDate() + 1);
    }

    return dias;
  };

  const diasUteis = obterDiasUteis(dataAtual);

  const handleTrocarSemana = (proximo) => {
    const novaData = new Date(dataAtual);
    novaData.setDate(novaData.getDate() + (proximo ? 7 : -7));
    setDataAtual(novaData);
  };

  const handleTrocarAgendamento = (data, direcao) => {
    setIndicesAgendamentos((prev) => {
      const indiceAtual = prev[data] || 0;
      const agendamentosDoDia = agendamentos.filter((ag) => ag.data === data);

      let novoIndice = indiceAtual + direcao;
      if (novoIndice >= agendamentosDoDia.length) novoIndice = 0; // Volta ao primeiro
      if (novoIndice < 0) novoIndice = agendamentosDoDia.length - 1; // Vai para o último

      return {
        ...prev,
        [data]: novoIndice,
      };
    });
  };

  const handleExcluirAgendamento = (data, horario) => {
    setAgendamentos((prev) =>
      prev.filter((agendamento) => !(agendamento.data === data && agendamento.horario === horario))
    );
  };

  return (
    <div className="perfilPro-container">
      <Navbar />

      <div className="todas-divs">
        <div className="perfil-profissional">
          <div className="titulo-perfil">
            <h1>Perfil Profissional</h1>
          </div>
          <div>
            <div className="div-foto-nome">
              <img src="renato.png" className="a-foto" alt="Foto do profissional" />
              <div className="nick-usuario">
                <h1>Joao Miguel</h1>
                <p>joaoMiguel@gmail.com</p>
              </div>
            </div>
            <div className="div-info">
              <div>
                <p>Eu atendo:</p>
                <p>Jovens</p>
                <p>Adultos</p>
                <p>Casais</p>
              </div>
              <div>
                <p>Especialidade(s):</p>
                <p>Bullying</p>
                <p>Autoaceitação</p>
              </div>
              <div className="descricao">
                <p>Descrição:</p>
                <textarea readOnly maxLength="132" value="Oie, eu sou o João Miguel e sou um ótimo profissional na minha área." />
              </div>
            </div>
          </div>
        </div>

        <div className="agenda-profissional">
          <h1>Agenda</h1>
          <div className="container-agendamento">
            <button onClick={() => handleTrocarSemana(false)}>&lt;</button>
            <div>
              {diasUteis.map((dia, index) => {
                const diaString = dia.toISOString().split("T")[0];
                const agendamentosDoDia = agendamentos.filter((ag) => ag.data === diaString);
                const indiceAtual = indicesAgendamentos[diaString] || 0;

                return (
                  <div key={index}>
                    <strong>{dia.toLocaleDateString("pt-BR", { weekday: "long" })}</strong>
                    <p>{dia.toLocaleDateString("pt-BR")}</p>
                    {agendamentosDoDia.length > 0 ? (
                      <div>
                        <p>{agendamentosDoDia[indiceAtual].paciente}</p>
                        <p>Horário: {agendamentosDoDia[indiceAtual].horario}</p>
                        <button onClick={() => handleTrocarAgendamento(diaString, -1)}>Anterior</button>
                        <button onClick={() => handleTrocarAgendamento(diaString, 1)}>Próximo</button>
                        <button onClick={() => handleExcluirAgendamento(agendamentosDoDia[indiceAtual].data, agendamentosDoDia[indiceAtual].horario)}>
                          Excluir
                        </button>
                      </div>
                    ) : (
                      <p>Sem agendamentos</p>
                    )}
                  </div>
                );
              })}
            </div>
            <button onClick={() => handleTrocarSemana(true)}>&gt;</button>
          </div>
        </div>
      </div> 
      <Footer />
    </div>
  );
}

export default Test_dois;
