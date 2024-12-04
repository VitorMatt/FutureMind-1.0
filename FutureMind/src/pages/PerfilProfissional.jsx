import { useState, useEffect, useContext } from 'react'
import Footer from '../components/Footer'
import CpfInput from '../components/CpfInput'
import CrpMask from '../components/CrpMask'
import PrecoMask from '../components/PrecoMask'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import TelefoneMask from '../components/TelefoneMask'
import './CSS/PerfilProfissional.css'
import './CSS/Test_dois.css'
import './CSS/Test_tres.css'
import { Label } from '@mui/icons-material'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import { useNavigate } from 'react-router-dom'


function PerfilProfissional() {

  // const { user, setUser } = useContext(GlobalContext);
  const { user, setUser } = useContext(GlobalContext);


  var userData = JSON.parse(localStorage.getItem('User'));

  userData.especializacao = userData.especializacao.replace('{', '')
  userData.especializacao = userData.especializacao.replace('}', '')
  userData.preferencias = userData.preferencias.replace('}', '')
  userData.preferencias = userData.preferencias.replace('{', '')
 
 for (let i=0; i<(userData.especializacao.length * 2); i++) {

  userData.especializacao = userData.especializacao.replace('"', '')
 }

 for (let i=0; i<(userData.preferencias.length * 2); i++) {

  userData.preferencias = userData.preferencias.replace('"', '')
 }

 userData.preferencias = userData.preferencias.split(',').map(item => item.trim()); 
 userData.especializacao = userData.especializacao.split(',').map(item => item.trim()); 

 const navigate = useNavigate();
 
const profissional =  { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descricao: 'Oie,eu sou o joão miguel e sou um ótimo profissional na minha área. Vamos consultar nosso próprio espírito que consola por dentro e grita para poder escapar da dor. Sou um ótimo profissional, eu juro!'}
const [date, setDate] = useState(profissional.data_nascimento); // Estado para armazenar a data selecionada

  const [dataAtual, setDataAtual] = useState(new Date());
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0}); // Posição da div de detalhes

  const [agendamentos, setAgendamentos] = useState([
  
    { data: "2024-12-02", paciente: "Thalles Lima", horario: "15:00" },
    { data: "2024-12-02", paciente: "Luciana Nuss", horario: "17:30" },
    { data: "2024-12-02", paciente: "aaaaaaaaa", horario: "20:00" },
    { data: "2024-12-03", paciente: "Julia Silva Dias", horario: "14:30" },
    { data: "2024-12-04", paciente: "Mateus da Silva", horario: "16:00" },
    { data: "2024-12-04", paciente: "renatinho", horario: "18:00" },
    { data: "2024-12-05", paciente: "aaaaaaaaa", horario: "20:00" },
    
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
    setDataAtual(prevData => {

      const novaData = new Date(prevData);
      novaData.setDate(novaData.getDate() + (proximo ? 7 : -7));
      return novaData;

    });
  };

  // const [temporaryText, setTemporaryText] = useState(""); // Texto enquanto o usuário digita
  // const [savedText, setSavedText] = useState(""); // Texto salvo

  // const handleTextChange = (event) => {
  //   setTemporaryText(event.target.value); // Atualiza o texto temporário
  // };

  // const handleSave = () => {
  //   setSavedText(temporaryText); // Salva o texto ao clicar no botão
  // };

  // const maxLength = 500; // Limite máximo de caracteres
  // const progressPercentage = (temporaryText.length / maxLength) * 100; // Porcentagem da barra de progresso
  
  const handleEventClick = (agendamento, event) => {
    // Captura a posição do elemento clicado
    const rect = event.target.getBoundingClientRect();
    setDivPosition({
      top: rect.top + window.scrollY,
      left: rect.left + rect.width + 10, // Posição à direita do elemento
    });
    setSelectedAgendamento(agendamento);
  };

  const handleCloseDetails = () => {
    setSelectedAgendamento(null); // Fecha a div de detalhes
  };

  const handleDeleteAppointment = (agendamentoParaExcluir) => {
    setAgendamentos((prevAgendamentos) =>
      prevAgendamentos.filter(
        (agendamento) =>
          agendamento.data !== agendamentoParaExcluir.data ||
          agendamento.horario !== agendamentoParaExcluir.horario ||
          agendamento.paciente !== agendamentoParaExcluir.paciente
      )
    );
    setSelectedAgendamento(null); // Fecha a div de detalhes
  };

  const handleConcludeAppointment = (agendamento) => {
    setAgendamentos((prevAgendamentos) =>
      prevAgendamentos.filter(
        (item) =>
          !(item.data === agendamento.data && item.horario === agendamento.horario)
      )
    );
    handleCloseDetails(); // Fecha a div de detalhes, se estiver aberta
  };

  const [abordagem, setAbordagem] = useState(profissional.abordagem);


    useEffect(() => {

      profissional.abordagem = abordagem;
  }, [abordagem]);

  const [horarios, setHorarios] = useState(profissional.horarios);


    useEffect(() => {

      profissional.horarios = horarios;
  }, [horarios]);

  // const [selecionarOpcoesAreas, setSelecionarOpcoesAreas] = useState([]);
  const opcoesAreas = ["Idosos", "PCDs", "Adultos", "Crianças", "Adolescentes", "Pré-Adolescentes"];
  // const [selecionarOpcoesEspecializacoes, setSelecionarOpcoesEspecializacoes] = useState([]);
  const opcoesEspecializacoes = ["Adolescência", "Depressão", "Angústia", "Ansiedade", "Bullying", "LGBTQIA+", "Relacionamentos", "Autoaceitação"];

  const handleChange = (event) => {
    const { value, checked } = event.target;
  };

  const handleSair = () => setUser({logado: false, profissional: false}); navigate('/');

  return (
    <div className='perfilPro-container'>
      
      <div className='todas-divs'>

        <div className='perfil-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

                <div>

                 <div className='div-foto-nome'>
                    <div className='foto-usuario'>
                        <img src='iconuser.svg' className='a-foto'/>
                    </div>
                     <div className='nick-usuario'>

                      {/* <h1>{userData.nome_completo}</h1>

                       {/* <h1>{userData.nome_completo}</h1>
                      <p>{userData.email}</p> */}

                      <h1>{userData.nome_completo}</h1>
                      <p>{userData.email}</p>
                    </div>
                 </div> 
    
                 <div className='div-info'>
                    <div className='div-menor-info'>
                        <p>Eu atendo...</p>

                        <div className="div-esp">

                        {
                          userData.preferencias.map((item, index) => (
                            <div key={index}>
                              <p>{item}</p>
                            </div>
                          ))
                        }
                        </div>
                    </div>
                    <div className='div-menor-info'>
                        <p>Especialidade(s):</p>
                        
                        <div className="div-esp">

                        {
                          userData.especializacao.map((item, index) => (
                            <div key={index}>
                            <p>{item}</p>
                            </div>
                          ))
                        }
                        </div>
                    </div>
                    <div className='descricao'>
                        <p>Descrição:</p>
                        <div className='div-desc' maxLength="500">{profissional.descricao}</div>
                    </div>
                 </div>
    
                 <div className='titulo-agenda'>
                    <h1>Agenda</h1>
                 </div>
                </div>
            
          <div className='container-agendamento'>
              <button onClick={() => handleTrocarSemana(false)} className="button_voltar"><img src="angle-left-solid.svg" alt="" /></button> 
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
                       <div className='Nome_dia_da_semana'>  {dia.toLocaleDateString("pt-BR", { weekday: "long" })} - {dia.getDate()}</div>
                      </div>
                     </div>
                     {agendamentosDoDia.map((event) => (
                    <div
                    key={`${diaString}-${event.horario}`}
                    className="event-card"
                    onClick={(e) => handleEventClick(event, e)}
                   >
                    <p onClick={() => handleEventClick(agendamentosDoDia)} className="agendamento-nome">
                     {event.paciente}
                    </p>
                    
                  </div>
                ))}
                    </div>
                  )
                }) 
             }
                   {selectedAgendamento && (
                     <div
                      className="detalhes-agendamento"
                      style={{
                        top: `${divPosition.top}px`,
                        left: `${divPosition.left}px`,
                      }}
                     >
                      <div className="detalhes-conteudo">
                        <div className='fechar-detalhes'>
                          <button onClick={handleCloseDetails}>
                            <img src="xizinho.svg" alt="" />
                          </button>
                        </div>
                        <h2>Detalhes do Agendamento</h2>
                        <p><strong>Paciente:</strong> {selectedAgendamento.paciente}</p>
                        <p><strong>Data:</strong> {selectedAgendamento.data}</p>
                        <p><strong>Horário:</strong> {selectedAgendamento.horario}</p>
                        <div className='buttons-detalhes-conteudo'>
                          <button className='but-det' onClick={() => handleDeleteAppointment(selectedAgendamento)}>
                            Cancelar
                          </button>
                          <button className='but-det' onClick={() => handleConcludeAppointment(selectedAgendamento)}>
                            Concluída
                          </button>
                        </div>
                      </div>
                      </div>
                  )}

           </div>
           </div>
           <button onClick={() => handleTrocarSemana(true)}  className="button_passar"><img src="angle-right-solid.svg" alt=""/></button>
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
                 <Flatpickr
                   options={{
                   locale: Portuguese, // Configuração para Português
                   dateFormat: "d/m/Y", // Formato da data
                   defaultDate: "today", // Data padrão
                   }}
                   value={date} // Data atual no estado
                   onChange={(selectedDates) => setDate(selectedDates[0])} // Atualiza a data selecionada
                 />
                 </div>
                </div>
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>CPF</p>
                  <CpfInput />
                 </div>
                </div>
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>CRP</p>
                  <CrpMask />
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

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>Preço</p>
                  <PrecoMask />
                 </div>
                </div>

              </div>

            </div>

            <div className='input-abordagem-perfil'>
              <p>Abordagem</p>
              <select value={abordagem} onChange={(e) => { setAbordagem(e.target.value)}} name="file" id="" className="inputAbordagem">
                <option name="file" value="Terapia">Terapia</option>
                <option name="file" value="Psicanalista">Psicanalista</option>
                <option name="file" value="Terapia Cognitiva">Terapia Cognitiva</option>
                <option name="file" value="Psicologia Analítica">Psicologia Analítica</option>
                <option name="file" value="Analítico Comportamental">Analítico Comportamental</option>
                <option name="file" value="Psicoterapia Corporal">Psicoterapia Corporal</option>
                <option name="file" value="Cognitivo-Comportamental">Cognitivo-Comportamental</option>
              </select>
            </div>

                <div className='input-horario-perfil'>
                  <p>Horário de Agendamento</p>
                  <select value={horarios} onChange={(e) => { setAbordagem(e.target.value)}} name="file" id="" className="inputAbordagem">
                    <option name="file" value="Matutino">Matutino (07:00hs até 12:00hs)</option>
                    <option name="file" value="Vespertino">Vespertino (13:00hs até 18:00hs)</option>
                    <option name="file" value="Noturno">Noturno (18:30hs até 23:30hs)</option>
                  </select>
                </div>

              <div className='container-escolhas'>

                {/* <div className="descricao-editar">
                  <h2>Digite uma breve descrição sobre você:</h2>
                  <textarea
                  className="o-text"
                  value={temporaryText}
                  onChange={handleTextChange}
                  rows="5"
                  maxLength={maxLength}
                  />
                  <div className='contador'>
                    <span>
                      {temporaryText.length} / {maxLength}
                    </span>
                  </div>
                  <div className="div-mensagemsalva">
                    <div className="a-mensagem">
                      <strong>Texto salvo:</strong>
                      <p>{savedText || "Nenhum texto salvo ainda."}</p>
                    </div>
                    <div className="div-botão-salvar">
                      <button onClick={handleSave} className="salvar">Salvar</button>
                    </div>
                  </div>
                </div> */}

                <div className='divs-editar'>

                <div className="container-areas">
                  <h2>Selecione suas áreas:</h2>
                  <div className="options-container">
                    {opcoesAreas.map((opcoesAreas, index) => (
                    <div key={index}>
                    <input
                    type="checkbox"
                    id={`opcoesAreas-${index}`}
                    value={opcoesAreas}
                    onChange={handleChange}
                    />
                    <label htmlFor={`opcoesAreas-${index}`} className="labelareas">
                      {opcoesAreas}
                    </label>
                    </div>
                    ))}
                  </div>
                </div>

                <div className="container-especi">
                  <h2>Selecione suas especializações:</h2>
                  <div className="options-container">
                    {opcoesEspecializacoes.map((opcoesEspecializacoes, index) => (
                    <div key={index}>
                    <input
                    type="checkbox"
                    id={`opcoesEspecializacoes-${index}`}
                    value={opcoesEspecializacoes}
                    onChange={handleChange}
                    />
                    <label htmlFor={`opcoesEspecializacoes-${index}`} className="labelespeci">
                      {opcoesEspecializacoes}
                    </label>
                    </div>
                    ))}
                  </div>
                </div>
                  
                </div>
                
              </div>


                <div className='div-buttons-salvar-cancelar'>
                <button className='a'>Excluir conta</button>
                  <button className='a' onClick={handleSair}> Sair da Conta</button>
                  {/* onClick={sair} */}
                  <button className='a'>Cancelar edição</button>
                  <button className='salva'>Salvar</button>
                </div>

        </div>

      </div>
      
      <Footer />
    </div>
  )
}

export default PerfilProfissional
