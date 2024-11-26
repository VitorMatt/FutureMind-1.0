import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CpfInput from '../components/CpfInput'
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import TelefoneMask from '../components/TelefoneMask'
import './CSS/PerfilProfissional.css'


function PerfilProfissional({ id_profissional }) {

  const [userData, setUserData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar dados do usuário
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/perfil-profissional/${id_profissional}`);

        if (!response.ok) {
          throw new Error("Erro ao carregar dados do usuário");
        }

        const data = await response.json();
        setUserData(data); // Armazena os dados recebidos no estado
        // setLoading(false);
      } catch (err) {
        // setError(err.message);
        // setUserData(false);
      }
    };

    fetchUserData();
  }, [id_profissional]);

  // if (loading) return <p>Loading</p>
  // if (error) return <p>error</p>
  
   const profissional =  { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descrição: 'Oie,eu sou o João Miguel e sou um ótimo profissional na minha área.'}

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
    <div className='perfilPro-container'>
      <Navbar />
      
      <div className='todas-divs'>

        <div className='perfil-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

                <div>

                 <div className='div-foto-nome'>
                    <div className='foto-usuario'>
                        <img src={userData.foto} className='a-foto'/>
                    </div>
                    <div className='nick-usuario'>
                        <h1>{userData.nome_completo}</h1>
                        <p>{userData.email}</p>
                    </div>
                 </div>
    
                 <div className='div-info'>
                    <div className='div-menor-info'>
                        <p>Eu atendo...</p>
                        <p>{userData.preferencias}</p>
                    </div>
                    <div className='div-menor-info'>
                        <p>Especialidade(s):</p>
                        <p>{userData.especializacao}</p>
                    </div>
                    <div className='descricao'>
                        <p>Descrição:</p>
                        <textarea readOnly maxLength="132">{userData.descricao}</textarea>
                    </div>
                 </div>
    
                 <div className='titulo-agenda'>
                    <h1>Agenda</h1>
                 </div>
                </div>
            
          <div className='container-agendamento'>
              <button onClick={handleTrocarSemana(false)} className="button_voltar"><img src="angle-left-solid.svg" alt="" /></button> 
           <div className='container-menor-ag'>
            <span className='mes-ano'>{dataAtual.toLocaleDateString ("pt-BR", {month: "long", year: "numeric"})}</span>
           <div className='dias_semana'>
             {
                diasUteis.map((dia,index) => {

                  const diaString = dia.toISOString().split("T")[0];
                  const agendamentosDoDia = agendamentos.filter((ag) => ag.data === diaString);
                  const indiceAtual = indicesAgendamentos[diaString] || 0;

                  return (

                    <div key={index} className="div_informações_ag">

                     <div className='semana'>
                      <div className='cabeçalho'>
                        {dia.toLocaleDateString("pt-BR", { weekday: "long" })} - {d.getDate()}
                        <p>{dia.toLocaleDateString("pt-BR")}</p>
                        <button onClick={() => handleTrocarAgendamento(diaString, -1)}>Anterior</button>
                        <button onClick={() => handleTrocarAgendamento(diaString, 1)}>Próximo</button>
                      </div>
                     </div>
                      {agendamentosDoDia.length > 0 ? (

                      <div className='itens_ag'>
                        <div className='os-itens'>
                          <p>{agendamentosDoDia[indiceAtual].paciente}</p>
                          <p>Data: {agendamentosDoDia[indiceAtual].data}</p>
                          <p>Horário: {agendamentosDoDia[indiceAtual].horario}</p>
                          <div className='buttons-itens'>
                            <button className='cancelar'>Cancelar</button>
                            <button className='check' onClick={() => handleExcluirAgendamento(agendamento.data, agendamento.horario, agendamento.paciente)}>
                             <img src="check-solid (1).svg" alt="" />
                            </button>
                          </div>
                        </div>
                      </div>

                      ) : (

                        <div className='mensagem_s'>Sem agendamento  (s)</div>
                        
                      )}
                    </div>
                  )
                }) 
             }
           </div>
           </div>
           <button onClick={handleTrocarSemana(true)}  className="button_passar"><img src="angle-right-solid.svg" alt=""/></button>
          </div>
        </div>
        <div className='anotações-profissional'>
         <div className='titulo-perfil'>
          <h1>Anotações</h1>
         </div>
         <div className='input-button'>
          <div className='input-anotações'>
           <textarea id='textA' className='text-anota' placeholder='Digite aqui...' rows="1"/>
          </div>
          <div className='button-anotações'>
           <button>Enviar</button>
          </div>
         </div>
         <div className='div-anotações'>
            
         </div>
        </div>
        <div className='editar-perfil-profissional'>
            <div className='titulo-perfil'>
                <h1>Editar Perfil</h1>
            </div>
            <div className='container-inputs-editar'>
              <div className='div1-editar'>
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>Nome Completo</p>
                  <input type="text" placeholder='Digite seu nome completo...'/>
                 </div>
                </div>
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                 <p>Data de Nascimento</p>
                 {/* <Flatpickr
                   options={{
                   locale: Portuguese, // Configuração para Português
                   dateFormat: "d/m/Y", // Formato da data
                   defaultDate: "today", // Data padrão
                   }}
                   value={date} // Data atual no estado
                   onChange={(selectedDates) => setDate(selectedDates[0])} // Atualiza a data selecionada
                 /> */}
                 </div>
                </div>
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>CPF</p>
                  <CpfInput />
                 </div>
                </div>
              </div>

              <div className='div2-editar'>

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>Telefone</p>
                  <TelefoneMask />
                 </div>
                </div>

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>E-mail</p>
                  <input type="email" />
                 </div>
                </div>

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>Senha</p>
                  <input type="text" />
                 </div>
                </div>

              </div>

            </div>
              <div className='container-areas'>
                <h1>Áreas</h1>

                <div className='div-areas'>
                  <div>
                    <p>Idosos</p>
                    <p>PCDs</p>
                    <p>Adultos</p>
                  </div>

                <div>
                  <p>Crianças</p>
                  <p>Adolescentes</p>
                  <p>Pré-Adolescentes</p>
                </div>
                </div>

              </div>
        </div>

      </div>
      
      <Footer />
    </div>
  )
}

export default PerfilProfissional
