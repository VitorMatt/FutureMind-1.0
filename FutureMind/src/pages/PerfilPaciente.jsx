import { useState, useEffect, useContext } from 'react'
import './CSS/PerfilPaciente.css'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import CpfInput from '../components/CpfInput'
import TelefoneMask from '../components/TelefoneMask'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PerfilPaciente() {


//   var userData = JSON.parse(localStorage.getItem('User'));

//   userData.especializacao = userData.especializacao.replace('{', '')
//   userData.especializacao = userData.especializacao.replace('}', '')
//   userData.preferencias = userData.preferencias.replace('}', '')
//   userData.preferencias = userData.preferencias.replace('{', '')
 
//  for (let i=0; i<(userData.especializacao.length * 2); i++) {

//   userData.especializacao = userData.especializacao.replace('"', '')
//  }

//  for (let i=0; i<(userData.preferencias.length * 2); i++) {

//   userData.preferencias = userData.preferencias.replace('"', '')
//  }

//  userData.preferencias = userData.preferencias.split(',').map(item => item.trim()); 
//  userData.especializacao = userData.especializacao.split(',').map(item => item.trim()); 

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
 
  //  const handleSair = () => setUser({logado: false, profissional: false}); navigate('/');
 

    return (
        <div className='perfilPa-container'>
      
      <div className='todas-divs-p'>

        <div className='perfil-paciente'>

            <div className='titulo-perfil-p'>
                <h1>Perfil Paciente</h1>
            </div>

                <div>

                 <div className='div-foto-nome-p'>
                    <div className='foto-usuario-p'>
                        <img src='iconuser.svg' className='a-foto-p'/>
                    </div>
                     <div className='nick-usuario-p'>

                        {/* <h1>{userData.nome_completo}</h1>

                      <h1>{userData.nome_completo}</h1>

                       <h1>{userData.nome_completo}</h1>

                      <p>{userData.email}</p>

                      <h1>{userData.nome_completo}</h1>
                      <p>{userData.email}</p> */}
                    </div>
                 </div>
    
                 <div className='titulo-agenda-p'>
                    <h1>Agenda</h1>
                 </div>
                </div>
            
          <div className='container-agendamento-p'>
              <button onClick={() => handleTrocarSemana(false)} className="button_voltar"><img src="angle-left-solid.svg" alt="" /></button> 
           <div className='container-menor-ag-p'>
            <span className='mes-ano-p'>{dataAtual.toLocaleDateString ("pt-BR", {month: "long", year: "numeric"})}</span>
           <div className='dias_semana-p'>
             {
                diasUteis.map((dia,index) => {

                  const diaString = dia.toISOString().split("T")[0];
                  const agendamentosDoDia = agendamentos.filter((ag) => ag.data === diaString);
                  const indiceAtual = indicesAgendamentos[diaString] || 0;

                  return (

                    <div key={index} className="div_informações_ag-p">

                     <div className='semana-p'>
                      <div className='cabeçalho-p'>
                       <div className='Nome_dia_da_semana-p'>  {dia.toLocaleDateString("pt-BR", { weekday: "long" })} - {dia.getDate()}</div>
                      </div>
                     </div>
                     {agendamentosDoDia.map((event) => (
                    <div
                    key={`${diaString}-${event.horario}`}
                    className="event-card-p"
                    onClick={(e) => handleEventClick(event, e)}
                   >
                    <p onClick={() => handleEventClick(agendamentosDoDia)} className="agendamento-nome-p">
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
                      className="detalhes-agendamento-p"
                      style={{
                        top: `${divPosition.top}px`,
                        left: `${divPosition.left}px`,
                      }}
                     >
                      <div className="detalhes-conteudo-p">
                        <div className='fechar-detalhes-p'>
                          <button onClick={handleCloseDetails}>
                            <img src="xizinho.svg" alt="" />
                          </button>
                        </div>
                        <h2>Detalhes do Agendamento</h2>
                        <p><strong>Paciente:</strong> {selectedAgendamento.paciente}</p>
                        <p><strong>Data:</strong> {selectedAgendamento.data}</p>
                        <p><strong>Horário:</strong> {selectedAgendamento.horario}</p>
                        <div className='buttons-detalhes-conteudo-p'>
                          <button className='but-det-p' onClick={() => handleDeleteAppointment(selectedAgendamento)}>
                            Cancelar
                          </button>
                          <button className='but-det-p' onClick={() => handleConcludeAppointment(selectedAgendamento)}>
                            Concluída
                          </button>
                        </div>
                      </div>
                      </div>
                  )}

           </div>     
           </div>
           <button onClick={() => handleTrocarSemana(true)}  className="button_passar-p"><img src="angle-right-solid.svg" alt=""/></button>
          </div>
        </div>

        <div className='editar-perfil-paciente'>
            <div className='titulo-perfil-p'>
                <h1>Editar Perfil</h1>
            </div>
            <div className='container-inputs-editar-p'>
              <div className='div1-editar-p'>
                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>Nome Completo</p>
                  <input type="text" className='inputCRP' placeholder='Digite seu nome completo...'/>
                 </div>
                </div>
                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                 <p>Data de Nascimento</p>
                 <Flatpickr
                 className='inputCRP'
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
                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>CPF</p>
                  <CpfInput />
                 </div>
                </div>
              </div>

              <div className='div2-editar-p'>

                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>Telefone</p>
                  <TelefoneMask />
                 </div>
                </div>

                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>E-mail</p>
                  <input type="email" className='inputCRP' />
                 </div>
                </div>

                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>Senha</p>
                  <input type="text" className='inputCRP' />
                 </div>
                </div>

              </div>

            </div>

             


                <div className='div-buttons-salvar-cancelar-p'>
                <button className='a-p'>Excluir conta</button>
                  <button className='a-p'> Sair da Conta</button>
                  <button className='a-p'>Cancelar edição</button>
                  <button className='salva'>Salvar</button>
                </div>

        </div>
        

        </div>

      </div>




    );
};

export default PerfilPaciente;