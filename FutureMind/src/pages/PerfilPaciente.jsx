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
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InputMask from 'react-input-mask';

function PerfilPaciente() {

  var userData = JSON.parse(localStorage.getItem('User'));
  
  const [email, setEmail] = useState(userData.email);
  const [senha, setSenha] = useState(userData.senha);
  const [nome, setNome] = useState(userData.nome_completo);
  const [data, setData] = useState(userData.data_nascimento)
  const [telefone, setTelefone] = useState(userData.telefone);
  const [cpf, setCpf] = useState(userData.cpf);
  
  
const [errors, setErrors] = useState({
  nome: '',
  email: '',
  data: '',
  senha: '',
  cpf: '',
  telefone: '',
});
  
  const handleEditarPerfil = async () => {
    let formIsValid = true;
    const newErrors = {};
  
    // Validação do Nome
    if (!nome || nome.trim().length < 3) {
      newErrors.nome = "O nome é obrigatório e deve ter no mínimo 3 caracteres.";
      formIsValid = false;
    }
  
    // Validação do Email
    if (!email || email.trim() === "") {
      newErrors.email = "O e-mail é obrigatório.";
      formIsValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "O e-mail é inválido. Verifique se está correto.";
      formIsValid = false;
    }
  
    // Validação do CPF
    if (!cpf || cpf.trim().length !== 14) {
      newErrors.cpf = "CPF inválido. Verifique se está completo.";
      formIsValid = false;
    }
  
    // Validação da Data de Nascimento
    if (data) {
      const today = new Date();
      const birthDate = new Date(data);
      const age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
  
      if (age < 18 || (age === 18 && month < 0)) {
        newErrors.data = "Você precisa ter mais de 18 anos para se cadastrar.";
        formIsValid = false;
      }
    } else {
      newErrors.data = "A data de nascimento não pode ser vazia.";
      formIsValid = false;
    }
  
    // Validação da Senha
    if (!senha || senha.trim().length < 6) {
      newErrors.senha = "A senha deve ter no mínimo 6 caracteres.";
      formIsValid = false;
    }
  
    // Validação do Telefone
    if (!telefone || telefone.trim().length < 14) {
      newErrors.telefone = "O telefone é inválido. Verifique se está no formato correto.";
      formIsValid = false;
    }
  
    // Atualiza os erros no estado
    setErrors(newErrors);
  
    // Se a validação falhou, não envia o formulário
    if (!formIsValid) return;
  
    // Monta os dados do paciente
    const novoPaciente = {
      ...userData,
      email,
      senha,
      data_nascimento: data,
      nome_completo: nome,
      cpf,
      telefone,
      id_paciente: userData.id_paciente,
    };
  
    // Atualiza os dados no backend
    try {
      const response = await fetch('http://localhost:3000/perfil-paciente', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(novoPaciente),
      });
  
      if (response.ok) {
        localStorage.setItem('User', JSON.stringify(novoPaciente));
        console.log('Perfil atualizado com sucesso!');
      } else {
        console.error('Erro ao atualizar o perfil:', await response.json());
      }
    } catch (err) {
      console.error('Erro na requisição:', err.message);
    }
  };
  
  const handleChanges = (e) => {
    const maskedValue = e.target.value;
    setTelefone(maskedValue);
    
  };



  const maskCpf = (e) =>{
    const maskedValue = e.target.value;
    setCpf(maskedValue);
  }





 const navigate = useNavigate();

 const { setUser } = useContext(GlobalContext);
 
 const profissional =  { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descricao: 'Oie,eu sou o joão miguel e sou um ótimo profissional na minha área. Vamos consultar nosso próprio espírito que consola por dentro e grita para poder escapar da dor. Sou um ótimo profissional, eu juro!'}
 const [date, setDate] = useState(userData.data_nascimento); // Estado para armazenar a data selecionada
 
   const [dataAtual, setDataAtual] = useState(new Date());
   const [selectedAgendamento, setSelectedAgendamento] = useState(null);
   const [divPosition, setDivPosition] = useState({ top: 0, left: 0}); // Posição da div de detalhes
   const [descricao, setDescricao] = useState(null);
 
   const [agendamentos, setAgendamentos] = useState([]);
 
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
 
   const handleSair = () => {
    setUser({logado: false, profissional: false}); 
    navigate('/');
   }

   const handleConcludeAppointment = async (agendamento) => {

     setAgendamentos((prevAgendamentos) =>
       prevAgendamentos.filter(
         (item) =>
           !(item.data === agendamento.data && item.horario === agendamento.horario)
       )
     );
     handleCloseDetails(); // Fecha a div de detalhes, se estiver aberta
    try {

      const response = await fetch(`http://localhost:3000/perfil-profissional/agenda/${agendamento}`, {
        method: 'DELETE'
      });

      

      
    } catch (err) {

      console.log(err.message);
    }
  };

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log('Arquivo selecionado:', file);
  
      const formData = new FormData(); // Corrigir a criação do FormData
      formData.append('foto', file); // Adicionar o arquivo selecionado
      formData.append('id_paciente', userData.id_paciente);
  
      try {
        const response = await fetch('http://localhost:3000/perfil-paciente/foto-perfil', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('User', JSON.stringify({...userData, foto: data.foto, descricao}));
          userData = JSON.parse(localStorage.getItem('User'));
          console.log('Resposta do servidor:', data); 
        } else {
          console.log('Erro no envio da foto:', response.status);
        }
      } catch (err) {
        console.log('Erro:', err.message);
      }
    }
  };

  useEffect(() => {
    getAgenda();
  }, []);
  
  const getAgenda = async () => {
    const id_paciente = userData.id_paciente;
  
    try {
      const response = await fetch(`http://localhost:3000/perfil-paciente/agenda/${id_paciente}`);
  
      if (response.ok) {
        const data = await response.json();
  
        // Formatar datas antes de salvar no estado
        const agendamentosFormatados = data.map((agendamento) => ({
          ...agendamento,
          data: agendamento.data.split("T")[0], // Garantir formato 'YYYY-MM-DD'
        }));
  
        setAgendamentos(agendamentosFormatados);
      } else {
        console.log("Erro ao buscar agenda:", response.statusText);
      }
    } catch (err) {
      console.log("Erro ao buscar agenda:", err.message);
    }
  };

  const [showModal, setShowModal] = useState(false);


  
  const handleDelete = async () => {
    const id_profissional = userData.id_profissional;

    try {
      const response = await fetch(`http://localhost:3000/perfil-profissional/${id_profissional}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Usuário deletado com sucesso!');
        setUser({ logado: false, profissional: false });
        navigate('/');
      }
    } catch (err) {
      console.log(err.message);
    }
}

  const handleSaveClick = async () => {
    try {
      const novoPaciente = {
        ...userData
      };
  
      const response = await fetch('http://localhost:3000/perfil-paciente', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoPaciente),
      });
  
      if (response.ok) {
        const updatedUser = await response.json();
        localStorage.setItem('User', JSON.stringify(updatedUser));
        setUser(updatedUser); // Atualiza o contexto do usuário
        console.log('Descrição salva com sucesso!');
      } else {
        const error = await response.json();
        console.error('Erro ao atualizar a descrição:', error);
        console.log('Erro ao salvar a descrição.');
      }
    } catch (err) {
      console.error('Erro na requisição:', err.message);
      console.log('Erro ao salvar a descrição.');
    }
  
    setIsEditing(false); // Sai do modo de edição
  };

    return (
        <div className='perfilPa-container'>

        <div className='div-but-p'>
          <Link to= "/" className='voltar-p'>Voltar</Link>
        </div>
      
      <div className='todas-divs-p'>

        <div className='perfil-paciente'>

            <div className='titulo-perfil-p'>
                <h1>Perfil Paciente</h1>
            </div>

                <div>

                 <div className='div-foto-nome-p'>

                  <div className='div-foto-editar'>
                    <div className='foto-usuario-p'>
                        <img src={`http://localhost:3000${userData.foto}`} className='a-foto-p'/>
                    </div>

                    <div className='input-editar-foto-p'>
                      <input type="file" id="file" name="file" onChange={onImageChange}/>
                       <label htmlFor="file" className="label-file-p"> Editar Foto</label>
                    </div>
                  </div>

                    <div className='nick-usuario-p'>

                      <h1 style={{color: '#5a7ca0'}}>{userData.nome_completo}</h1>
                      <p>{userData.email}</p>
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
                     {event.profissional_nome}
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
                            <img src="xizinho.svg"/>
                          </button>
                        </div>
                        <h2>Detalhes do Agendamento</h2>
                        <p><strong>Profissional:</strong> {selectedAgendamento.profissional_nome}</p>
                        <p><strong>Data:</strong> {selectedAgendamento.data}</p>
                        <p><strong>Horário:</strong> {selectedAgendamento.horario}</p>
                        <div className='buttons-detalhes-conteudo-p'>
                          <button className='but-det-p' onClick={() => handleDeleteAppointment(selectedAgendamento)}>
                            Cancelar
                          </button>
                          <button className='but-det-p' onClick={() => handleConcludeAppointment(selectedAgendamento.id_agendamento)}>
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
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                    placeholder='Digite seu nome completo...'
                    style={{ borderColor: errors.nome ? 'red' : '' }}
                  />
                 {errors.nome && (
                  <>
                    <span className="error-circle"></span>
                    <div className="error-message">{errors.nome}</div>
                  </>
                )}
                 </div>
                </div>
                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                 <p>Data de Nascimento</p>
                 <Flatpickr
                  options={{
                    locale: Portuguese,
                    dateFormat: "y/m/d",
                    defaultDate: "today",
                  }}
                  value={data}
                  onChange={(selectedDates) => setData(selectedDates[0])}
                  style={{ borderColor: errors.data ? 'red' : '' }}
                />
                {errors.data && (
                  <>
                    <span className="error-circle"></span>
                    <div className="error-message">{errors.data}</div>
                  </>
                )}
                 </div>
                </div>
                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>CPF</p>
                  <InputMask
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={maskCpf}
                    placeholder="000.000.000-00"
                    id="cpf"
                    className="inputCRP"
                  >
                    {(inputProps) => <input {...inputProps} />}
                  </InputMask>
                  {errors.cpf && (
                            <>
                      <span className="error-circle"></span>
                      <div className="error-message">
                      CPF inválido
                      </div>
                    </>
                  )}
                 </div>
                </div>
              </div>

              <div className='div2-editar-p'>

                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                  <p>Telefone</p>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    id="telefone"
                    className='inputCRP'
                  >
                    {(inputProps) => <input {...inputProps} />}
                  </InputMask>
                  {errors.telefone && (
                    <>
                      <span className="error-circle"></span>
                      <div className="error-message">
                        Número Inválido.
                      </div>
                    </>
                  )}
                 </div>
                </div>

                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                 <p>E-mail</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: errors.email ? 'red' : '' }}
                  />
                  {errors.email && (
                    <>
                      <span className="error-circle"></span>
                      <div className="error-message">
                        O e-mail é inválido. Verifique se está correto.
                      </div>
                    </>
                  )}
                 </div>
                </div>

                <div className='div_container_pinput-p'>
                 <div className='div_pinput-p'>
                 <p>Senha</p>
                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    style={{ borderColor: errors.senha ? 'red' : '' }}
                  />
                  {errors.senha && (
                    <>
                      <span className="error-circle"></span>
                      <div className="error-message">
                        A senha deve ter no mínimo 6 caracteres e incluir números e letras.
                      </div>
                    </>
                  )}
                 </div>
                </div>

              </div>

            </div>

             


                <div className='div-buttons-salvar-cancelar-p'>
                <button className='a'onClick={() => setShowModal(true)}>Excluir conta</button>
                {showModal && (
                    <div className="modal-overlays">
                      <div className="modal-contents">
                        <p className='aaaaa'>Deseja mesmo deletar sua conta?</p>
                        <div>
                          <button className='errados' onClick={handleDelete}>Deletar conta</button>
                          <button className='certos' onClick={() => setShowModal(false)}>Cancelar</button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button className='a-p' onClick={handleSair} >Sair da Conta</button>
                  <button className='a-p'>Cancelar edição</button>
                  <button className='salva' onClick={handleEditarPerfil}>Salvar</button>
                </div>

        </div>
        

        </div>

      </div>




    );
};

export default PerfilPaciente;