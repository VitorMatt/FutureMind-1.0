
import './CSS/PerfilVisualizar.css'
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useState, useEffect, useContext } from 'react'
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import './CSS/PerfilProfissional.css';

import { Link } from 'react-router-dom';


function PerfilVisualizar() {
  
  // const profissional = 
  
  // [
  
  //   { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descrição: 'Oie,eu sou o João Miguel e sou um ótimo profissional na minha área.',}
  
  // ]

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

  const [temporaryText, setTemporaryText] = useState(""); // Texto enquanto o usuário digita
  const [savedText, setSavedText] = useState(""); // Texto salvo


  const [profissional, setProfissional] = useState({

    preferencias: [],
    especializacao: []
  });
  const { id } = useContext(GlobalContext);
  
  useEffect(() => {
    if (id != null) {
      handleGet();
    } else {
      alert('Erro: ID não está definido.');
    }
  }, []); // O useEffect será disparado sempre que `id` mudar.
  
  // var userData = JSON.parse(localStorage.getItem('User'));

  // if (!Array.isArray(userData.especializacao)) {
  //   userData.especializacao = userData.especializacao
  //     .replace(/[{}"]/g, '') // Remove '{', '}', e aspas
  //     .split(',')            // Divide por vírgula
  //     .map(item => item.trim()); // Remove espaços desnecessários
  // }
  
  // if (!Array.isArray(userData.preferencias)) {
  //   userData.preferencias = userData.preferencias
  //     .replace(/[{}"]/g, '') // Remove '{', '}', e aspas
  //     .split(',')            // Divide por vírgula
  //     .map(item => item.trim()); // Remove espaços desnecessários
  // }

  const [isEditing, setIsEditing] = useState(false);
  const [descricao, setDescricao] = useState(''); // Armazena a descrição atual
  
    const handleEditClick = () => {
      setIsEditing(true); // Ativa o modo de edição
    };
    
    const handleSaveClick = () => {
      // Aqui você pode adicionar a lógica para salvar as alterações, como uma chamada à API
      setIsEditing(false); // Desativa o modo de edição
  
      // userData.descricao = descricao;
      
    };
    
    const handleCancelClick = () => {
      setDescricao(null); // Reverte para o valor original
      setIsEditing(false); // Cancela o modo de edição
    };
  

  // const handleReplace = () => {

  //   for (var i)
 
  //     profissional.especializacao = profissional.especializacao.replace('{', '');
      
  //     .split(',').map(item => item.trim());
  
  //   if (profissional.preferencias) {
  //     profissional.preferencias = profissional.preferencias.replace(/[{}"]/g, '').split(',').map(item => item.trim());
  //   }
  // }


    const handleGet = async() => {

      const response = await fetch(`http://localhost:3000/profissional/${id}`);

      if (response.ok) {

        const data = await response.json();
        setProfissional(data);
        alert(data)
      } else {

        alert('p')
      }
    }

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

  return (
    <div className='perfilVisu-container'>

      <div className='div-but-v'>
        <Link to="/" className='voltar-v'>Voltar</Link>
      </div>

           <div className='perfil-profissional-v'>
           <div className='titulo-perfil-v'>
                <h1>Perfil Profissional</h1>
            </div>

                 <div className='div-foto-nome-v'>
                        
                    <div className='foto-usuario-v'>
                        <img src='/iconuser.svg' className='a1-foto-v'/> 
                        </div>
                     <div className='nick-usuario-v'>

                      <div className='meet-v'>
                        <Link to="https://workspace.google.com/products/meet/"><img src="/video-solid.svg"/></Link>
                      </div>

                      <div>
                        {/* <h1>{userData.nome_completo}</h1>
                        <p>{userData.email}</p> */}
                      </div>

                    </div>
                 </div> 
    
                 <div className='div-info'>
                    <div className='div-menor-info'>
                        <p>Eu atendo...</p>

                        <div className="div-esp">

                        {/* {
                          userData.preferencias.map((item, index) => (
                            <div key={index}>
                              <p>{item}</p>
                            </div>
                          ))
                        } */}
                        </div>
                    </div>
                    <div className='div-menor-info'>
                        <p>Especialidade(s):</p>
                        
                        <div className="div-esp">

                         {/* {
                          userData.especializacao.map((item, index) => (
                            <div key={index}>
                            <p>{item}</p>
                            </div>
                          ))
                        }  */}
                        </div>
                    </div>
                    <div className='descricao'>
                        <div  className='Minha_desc'>
                        <p>Descrição:</p>
                        
                        </div>
                        
                        <div className="div-desc">
                       
                        <textarea
                         maxLength="500"
                         value={descricao}
                         onChange={(e) => setDescricao(e.target.value)}
                         readOnly
                         style={{ width: "95%", height: "100px", resize: "none", background: "transparent", border: "none", color: "#014F86", borderRadius: "13px", padding: "1.5%"}}
                        />
                        
                        </div>
                    </div>
                 </div>
                
                 <div className='titulo-agenda-v'>
                    <h1>Agenda</h1>
                 </div>
            
          <div className='container-agendamento-v'>
              <button onClick={() => handleTrocarSemana(false)} className="button_voltar-v"><img src="/angle-left-solid.svg" alt="" /></button> 
           <div className='container-menor-ag-v'>
            <span className='mes-ano-v'>{dataAtual.toLocaleDateString ("pt-BR", {month: "long", year: "numeric"})}</span>
           <div className='dias_semana-v'>
             {
                diasUteis.map((dia,index) => {

                  const diaString = dia.toISOString().split("T")[0];
                  const agendamentosDoDia = agendamentos.filter((ag) => ag.data === diaString);
                  const indiceAtual = indicesAgendamentos[diaString] || 0;

                  return (

                    <div key={index} className="div_informações_ag-v">

                     <div className='semana-v'>
                      <div className='cabeçalho-v'>
                       <div className='Nome_dia_da_semana-v'>  {dia.toLocaleDateString("pt-BR", { weekday: "long" })} - {dia.getDate()}</div>
                      </div>
                     </div>
                     {agendamentosDoDia.map((event) => (
                    <div
                    key={`${diaString}-${event.horario}`}
                    className="event-card-v"
                    onClick={(e) => handleEventClick(event, e)}
                   >
                    <p onClick={() => handleEventClick(agendamentosDoDia)} className="agendamento-nome-v">
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
                      className="detalhes-agendamento-v"
                      style={{
                        top: `${divPosition.top}px`,
                        left: `${divPosition.left}px`,
                      }}
                     >
                      <div className="detalhes-conteudo-v">
                        <div className='fechar-detalhes-v'>
                          <button onClick={handleCloseDetails}>
                            <img src="/xizinho.svg" alt="" />
                          </button>
                        </div>
                        <h2>Detalhes do Agendamento</h2>
                        <p><strong>Paciente:</strong> {selectedAgendamento.paciente}</p>
                        <p><strong>Data:</strong> {selectedAgendamento.data}</p>
                        <p><strong>Horário:</strong> {selectedAgendamento.horario}</p>
                      </div>
                      </div>
                  )}

           </div>
           </div>
           <button onClick={() => handleTrocarSemana(true)}  className="button_passar-v"><img src="/angle-right-solid.svg" alt=""/></button>
          </div>
                
                
                </div>
            </div>
  )
}

export default PerfilVisualizar;