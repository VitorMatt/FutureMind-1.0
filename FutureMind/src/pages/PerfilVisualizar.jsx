
import './CSS/PerfilVisualizar.css'
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useState, useEffect, useContext } from 'react'
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import './CSS/PerfilProfissional.css'

import { Link } from 'react-router-dom';


function PerfilVisualizar() {

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
  
  var userData = JSON.parse(localStorage.getItem('User'));

  if (!Array.isArray(userData.especializacao)) {
    userData.especializacao = userData.especializacao
      .replace(/[{}"]/g, '') // Remove '{', '}', e aspas
      .split(',')            // Divide por vírgula
      .map(item => item.trim()); // Remove espaços desnecessários
  }
  
  if (!Array.isArray(userData.preferencias)) {
    userData.preferencias = userData.preferencias
      .replace(/[{}"]/g, '') // Remove '{', '}', e aspas
      .split(',')            // Divide por vírgula
      .map(item => item.trim()); // Remove espaços desnecessários
  }

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
    // const profissional = 
   
  //  [
// 
  //     { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descrição: 'Oie,eu sou o João Miguel e sou um ótimo profissional na minha área.',}

  //  ]

  return (
    <div className='perfilVisu-container'>
           <div className='perfil-profissional'>
           <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

                 <div className='div-foto-nome'>
                        
                    <div className='foto-usuario'>
                        <img src='iconuser.svg' className='a1-foto'/> 
                      <div className='input-editar-foto'>
                      <input type="file" id="file" name="file" />
                       <label htmlFor="file" className="label-file"> Editar Foto</label>
                        </div>
                        </div>
                     <div className='nick-usuario'>

                      <div className='meet'>
                        <Link to="https://workspace.google.com/products/meet/"><img src="video-solid.svg"/></Link>
                      </div>

                      <div>
                        <h1>{userData.nome_completo}</h1>
                        <p>{userData.email}</p>
                      </div>

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
                        <div  className='Minha_desc'>
                        <p>Descrição:</p>
                        {!isEditing ? (
                        <button className="But_desc" onClick={handleEditClick}>
                          Editar
                        </button>
                        ) : (
                        <>
                        <button className="But_desc" onClick={handleSaveClick}>
                          Salvar
                        </button>
                        <button className="But_desc" onClick={handleCancelClick}>
                          Cancelar
                        </button>
                        </>
                        )}
                        </div>
                        
                        <div className="div-desc">
                        {!isEditing ? (
                        descricao
                        ) : (
                        <textarea
                         maxLength="500"
                         value={descricao}
                         onChange={(e) => setDescricao(e.target.value)}
                         style={{ width: "95%", height: "100px", resize: "none", background: "#cad7ebcb", border: "none", color: "#014F86", borderRadius: "13px", padding: "1.5%"}}
                        />
                        )}
                        </div>
                    </div>
                 </div>
                </div>
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
  )
}

export default PerfilVisualizar;