import { GlobalContext } from '../GlobalContext/GlobalContext';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useState, useEffect, useContext } from 'react'
import CpfInput from '../components/CpfInput'
import CrpMask from '../components/CrpMask'
import PrecoMask from '../components/PrecoMask'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 
import { Portuguese } from "flatpickr/dist/l10n/pt"; 
import TelefoneMask from '../components/TelefoneMask'
import './CSS/PerfilProfissional.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InputMask from 'react-input-mask';
// import { Label } from '@mui/icons-material'
// import { useNavigate, useRouteLoaderData } from 'react-router-dom'
// import { color } from 'framer-motion';


function PerfilProfissional() {

  const { user, setUser, profissional } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [date, setDate] = useState(profissional.data_nascimento);
  
  const [dataAtual, setDataAtual] = useState(new Date());
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0}); // Posição da div de detalhes
  
  const [agendamentos, setAgendamentos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [descricao, setDescricao] = useState(''); // Armazena a descrição atual
  
  const [temporaryText, setTemporaryText] = useState("");
  const [savedText, setSavedText] = useState(""); 
  
  const [indicesAgendamentos, setIndicesAgendamentos] = useState({}); 
  
  
  
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
  
  const [email, setEmail] = useState(userData.email);
  const [senha, setSenha] = useState(userData.senha);
  const [nome, setNome] = useState(userData.nome_completo);
  const [data, setData] = useState(userData.data_nascimento)
  const [telefone, setTelefone] = useState(userData.telefone);
  const [crp, setCrp] = useState(userData.crp)
  const [preco, setPreco] = useState(userData.preco);
  const [cpf, setCpf] = useState(userData.cpf);
  
  
  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    data: '',
    senha: '',
    cpf:'',
    preco:'',
    crp:'',
    telefone:'',
    especializacao: '',
    preferencias: '',
  });
  
  const handleEditarPerfil = async () => {
    let formIsValid = true;
    let newErrors = {
      nome: false,
      email: false,
      data: false,
      senha: false,
      cpf:false,
      preco:false,
      crp:false,
      telefone:false,
      especializacao: false,
      preferencias: false,
    };

    if (especializacao.length === 0) {
      newErrors.especializacao = 'Selecione pelo menos uma especialização.';
      formIsValid = false;
    }
    
    // Validação para preferências (caso necessário)
    if (preferencias.length === 0) {
      newErrors.preferencias = true;
      formIsValid = false;
    }
    
    if (!preco || preco.trim() === '') {
      newErrors.preco = true;
      formIsValid = false;
    }
    if (!telefone || telefone.trim().length < 10) {
      newErrors.telefone = true;
      formIsValid = false;
    }
    // Validação do CPF
      if (!cpf || cpf.trim().length !== 14) {
        newErrors.cpf = true;
        formIsValid = false;
      }
      
      // Validação do CRP
      if (!crp || crp.trim().length < 8) {
        newErrors.crp = true;
        formIsValid = false;
      }
      
      if (!nome || nome.trim() === "") {
        newErrors.nome = true;
      formIsValid = false;
    }
    
    // Validação do email
    if (!email || email.trim() === "") {
      newErrors.email = true;
      formIsValid = false;
    } else if (!email.includes("@gmail.com")) {
      newErrors.email = true;
      formIsValid = false;
    }
    
    if (date) {
      const today = new Date();
      const birthDate = new Date(date);
      const age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      
      if (age < 18 || (age === 18 && month < 0)) {
        newErrors.data = "Você precisa ter mais de 18 anos para se cadastrar.";
        formIsValid = false;
      }
    }
    
    if (!senha || senha.trim() === "") {
      newErrors.senha = true;
      formIsValid = false;
    }
    
    if (!telefone || telefone.trim().length < 10) {
      newErrors.telefone = true;
      formIsValid = false;
    }
  
    // Atualiza os erros no estado
    setErrors(newErrors);
    
    // Se a validação falhou, não envia o formulário
    if (!formIsValid) return;
    
    
    const novoProfissional = {
      ...userData,
      email,
      senha,
      preferencias, // Envia apenas os itens selecionados
      especializacao, // Envia apenas os itens selecionados
      data_nascimento: date,
      preco,
      nome_completo: nome,
      cpf,
      crp,
      abordagem,
      telefone,
      descricao,
      id_profissional: userData.id_profissional,
    };
    
    try {
      const response = await fetch('http://localhost:3000/perfil-profissional', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(novoProfissional),
      });
      
      if (response.ok) {
        localStorage.setItem('User', JSON.stringify(novoProfissional));
        console.log('Perfil atualizado com sucesso!');
      } else {
        console.error('Erro ao atualizar o perfil:', await response.json());
      }
    } catch (err) {
      console.error('Erro na requisição:', err.message);
    }
  };
  
  const handleChange = (e) => {
    const maskedValue = e.target.value;
    setTelefone(maskedValue);
    
  };

  const maskCrp = (e) =>{
    const maskedValue = e.target.value;
    setCrp(maskedValue);
  }

  const maskCpf = (e) =>{
    const maskedValue = e.target.value;
    setCpf(maskedValue);
  }

  const maskPreco = (e) =>{
    const maskedValue = e.target.value;
    setPreco(maskedValue);
  }
  
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

  const handleConcludeAppointment = async (agendamento) => {

    try {

      const response = await fetch(`http://localhost:3000/perfil-profissional/agenda/${agendamento}`, {
        method: 'DELETE'
      });

      if (response.ok) {

        setAgendamentos((prevAgendamentos) =>
          prevAgendamentos.filter(
            (item) =>
              !(item.data === agendamento.data && item.horario === agendamento.horario)
          )
        );
        handleCloseDetails(); // Fecha a div de detalhes, se estiver aberta
      }
    } catch (err) {

      console.log(err.message);
    }
  };

  const [abordagem, setAbordagem] = useState(userData.abordagem);


  //   useEffect(() => {

  //     profissional.abordagem = abordagem;
  // }, [abordagem]);

  // const [horarios, setHorarios] = useState(profissional.horarios);


  //   useEffect(() => {

  //     profissional.horarios = horarios;
  // }, [horarios]);

  const opcoesAreas = ["Idosos", "PCDs", "Adultos", "Crianças", "Adolescentes", "Pré-Adolescentes"];
  const opcoesEspecializacoes = ["Adolescência", "Depressão", "Angústia", "Ansiedade", "Bullying", "LGBTQIA+", "Relacionamentos", "Autoaceitação"];

  const [preferencias, setPreferencias] = useState([]);
  const [especializacao, setEspecializacao] = useState([]);



  const handleEditClick = () => {
    setIsEditing(true); 
  };
  
  const handleSaveClick = async () => {
    try {
      const novoProfissional = {
        ...userData,
        descricao, 
      };
  
      const response = await fetch('http://localhost:3000/perfil-profissional', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProfissional),
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
  
  
  const handleCancelClick = () => {
    setDescricao(null); // Reverte para o valor original
    setIsEditing(false); // Cancela o modo de edição
  };

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log('Arquivo selecionado:', file);
  
      const formData = new FormData(); // Corrigir a criação do FormData
      formData.append('foto', file); // Adicionar o arquivo selecionado
      formData.append('id_profissional', userData.id_profissional);
  
      try {
        const response = await fetch('http://localhost:3000/perfil-profissional/foto-perfil', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('User', JSON.stringify({...userData, foto: data.foto, descricao}));
          userData = JSON.parse(localStorage.getItem('User'));
          console.log('Resposta do servidor:', data);
          alert('Foto enviada com sucesso!');
        } else {
          console.log('Erro no envio da foto:', response.status);
          alert('Erro ao enviar a foto.');
        }
      } catch (err) {
        console.error('Erro:', err.message);
      }
    }
  };
  
  const sair = () => {

    setUser({logado: false, profissional: false});
    navigate('/');
  };

  const deletaUsuario = async() => {

    // const res = prompt('Deseja mesmo deletar sua conta?');

    const res = () => {
      <div className='div-exluir'>
      <p>Deseja Exluir sua conta Permantemente?</p>
      <div>
        <div>
       <button>Sim</button>
        </div>

        <div>
       <button>Sim</button>
        </div>

      </div>
    </div>
    }

    if (!res=='sim') return;

    const id_profissional = userData.id_profissional;

    try {

      const response = await fetch(`http://localhost:3000/perfil-profissional/${id_profissional}`, {

        method: 'DELETE'
      });

      if (response.ok) {

        console.log('User deletado com sucesso!');
        setUser({logado: false, profissional: false});
        navigate('/');
      }
    } catch(err) {

      console.log(err.message);
    }
  }

  const handleChangeEspecializacoes = (e) => {
    const value = e.target.value;
    setEspecializacao((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  
  const handleChangePreferencias = (e) => {
    const value = e.target.value;
    setPreferencias((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem('User'));
    if (userDataFromStorage) {
      setDescricao(userDataFromStorage.descricao || ''); // Recupera a descrição salva ou usa uma string vazia
    }
  }, []);

 //
  const salvarAnotacoesNoLocalStorage = (idProfissional, anotacoes) => {
    const dadosProfissional = JSON.parse(localStorage.getItem('User'));
    
    if (dadosProfissional && dadosProfissional.id_profissional === idProfissional) {
      localStorage.setItem(`anotacoes_${idProfissional}`, JSON.stringify(anotacoes));
    }
  };
  
  
  const obterAnotacoesDoLocalStorage = (idProfissional) => {
    const anotacoesSalvas = localStorage.getItem(`anotacoes_${idProfissional}`);
    return anotacoesSalvas ? JSON.parse(anotacoesSalvas) : [];
  };
  
    const [nota, setNota] = useState("");
    const [notas, setNotas] = useState([]);
    
    const idProfissional = userData.id_profissional;
  
    useEffect(() => {
      const anotacoesExistentes = obterAnotacoesDoLocalStorage(idProfissional);
      setNotas(anotacoesExistentes);
    }, [idProfissional]);
  
    const adicionarNota = () => {
      if (nota.trim() !== "") {
        const novasNotas = [...notas, nota]; 
        setNotas(novasNotas); 
        setNota(""); 
  
        
        salvarAnotacoesNoLocalStorage(idProfissional, novasNotas);
      }
    };
    
    const [pacientes, setPacientes] = useState([]);
    useEffect(() => {
      getAgenda();
    }, []);
    
    const getAgenda = async () => {
      const id_profissional = userData.id_profissional;
    
      try {
        const response = await fetch(`http://localhost:3000/perfil-profissional/agenda/${id_profissional}`);
    
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
    
    const formatarData = (data) => {
      const [year, month, day] = data.split('-');
      return `${day}/${month}/${year}`;
    };
    

  return (
    <div className='perfilPro-container'>
      
      <div className='todas-divs'>

        <div className='perfil-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

                 <div className='div-foto-nome'>
                        
                    <div className='foto-usuario'>
                        <img src={`http://localhost:3000${userData.foto}`} className='a1-foto'/> 
                      <div className='input-editar-foto'>
                      <input type="file" id="file" onChange={onImageChange} name="file" />
                       <label htmlFor="file" className="label-file"> Editar Foto</label>
                        </div>
                        </div>
                     <div className='nick-usuario'>

                      <div className='meet'>
                        <Link to="https://workspace.google.com/products/meet/"><img src="video-solid.svg"/></Link>
                      </div>

                      <div>
                        <h1 style={{color: '#5a7ca0'}}>{userData.nome_completo}</h1>
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
    
            <div className='titulo-agenda'>
              <h1>Agenda</h1>
            </div>

            <div className='container-agendamento'>
              <button onClick={() => handleTrocarSemana(false)} className="button_voltar">
                <img src="angle-left-solid.svg" alt="Semana Anterior" />
              </button>
              
              <div className='container-menor-ag'>
                <span className='mes-ano'>{dataAtual.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</span>
                
                <div className="dias_semana">
  {diasUteis.map((dia, index) => {
    const diaString = dia.toISOString().split("T")[0];
    const agendamentosDoDia = agendamentos.filter((ag) => ag.data === diaString);

    return (
      <div key={index} className="div_informações_ag">
        <div className="semana">
          <div className="cabeçalho">
            <div className="Nome_dia_da_semana">
              {dia.toLocaleDateString("pt-BR", { weekday: "long" })} - {dia.getDate()}
            </div>
          </div>
        </div>

        {agendamentosDoDia.map((event, idx) => (
          <div key={`${diaString}-${idx}`} className="event-card" onClick={(e) => handleEventClick(event, e)}>
            <p onClick={() => handleEventClick(agendamentosDoDia)}>{event.paciente_nome || "Não informado"} - {event.data}</p>
          </div>
        ))}
      </div>
    );
  })}

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
                        <p><strong>Paciente:</strong> {selectedAgendamento.paciente_nome}</p>
                        <p><strong>Data:</strong> {selectedAgendamento.data}</p>
                        <p><strong>Horário:</strong> {selectedAgendamento.horario}</p>
                        <div className='buttons-detalhes-conteudo'>
                          <button className='but-det' onClick={() => handleDeleteAppointment(selectedAgendamento)}>
                            Cancelar
                          </button>
                          <button className='but-det' onClick={() => handleConcludeAppointment(selectedAgendamento.id_agendamento)}>
                            Concluída
                          </button>
                        </div>
                      </div>
                      </div>
                  )}

</div>

              </div>
              
              <button onClick={() => handleTrocarSemana(true)} className="button_passar">
                <img src="angle-right-solid.svg" alt="Próxima Semana" />
              </button>
            </div>
        </div>
        <div className='anotações-profissional'>
         <div className='titulo-perfil'>
          <h1>Anotações</h1>
         </div>
         <div className='input-button'>
          <div className='input-anotações'>
           <textarea 
           id='textA'
           value={nota}
           onChange={(e) => setNota(e.target.value)}
           className='text-anota' 
           placeholder='Digite aqui...'
            rows="1"/>
          </div>
          <div className='button-anotações'>
           <button onClick={adicionarNota}>Enviar</button>
          </div>
         </div>
         <div className='div-anotações'>
         <Swiper 

         modules={[Navigation, Pagination, A11y]}
         spaceBetween={1}
         slidesPerView={4}
         navigation
         pagination={{ clickable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         className='swiper-anotacoes'
        >
          
          {notas.map((nota, index) => (
          <SwiperSlide key={index} className='slide_swiper'>
            <div className='mini_divs'>
             <div className="nota-slide">
              <textarea className='textarea_anotação' cols="30" rows="14" readOnly  >{nota}</textarea>
             </div>
            </div>
          
         </SwiperSlide>
          ))}
          </Swiper>
            
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
                      <div className="error-message">
                        O nome é obrigatório e deve ter no mínimo 3 caracteres.
                      </div>
                    </>
                  )}
                 </div>
                </div>
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                 <p>Data de Nascimento</p>
                 <Flatpickr
                    options={{
                      locale: Portuguese,
                      dateFormat: "y/m/d",
                      defaultDate: "today",
                    }}
                    value={data}
                    onChange={(selectedDates) => setDate(selectedDates[0])}
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
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
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
                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>CRP</p>
                  <InputMask
            mask="99/99999"
            value={crp}
            onChange={maskCrp}
            placeholder="00/000000"
            id="crp"
            className="inputCRP"
          >
            {(inputProps) => <input {...inputProps} />}
          </InputMask>
          {errors.crp && (
                    <>
                      <span className="error-circle"></span>
                      <div className="error-message">
                       CRP inválido.
                      </div>
                    </>
                  )}

                 </div>
                </div>
              </div>

              <div className='div2-editar'>

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>Telefone</p>
                 
                  <div>
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
                </div>

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
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

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
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

                <div className='div_container_pinput'>
                 <div className='div_pinput'>
                  <p>Preço</p>
                  <InputMask
                  id="price"
                  mask="99.99"
                  placeholder="R$ 0,00"
                  maskChar=""
                  onChange={maskPreco}
                  value={preco}
                >
                  {(inputProps) => <input {...inputProps} type="text" />}
                </InputMask>
                {errors.preco && (
                    <>
                      <span className="error-circle"></span>
                      <div className="error-message">
                       Valor menor que R$50,00.
                      </div>
                    </>
                  )}
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

              <div className='container-escolhas'>

                <div className='divs-editar'>

                <div className="container-areas">
                <h2>Selecione suas áreas:</h2>
                <div className="options-container">
                  {opcoesAreas.map((opcao, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`opcoesAreas-${index}`}
                        value={opcao}
                        checked={preferencias.includes(opcao)} // Mantém o estado visual dos checkboxes
                        onChange={handleChangePreferencias}
                      />
                      <label htmlFor={`opcoesAreas-${index}`} className="labelareas">
                        {opcao}
                      </label>
                    </div>
                  ))}
                </div>
                  {errors.preferencias && <span className='areas'>Selecione pelo menos uma preferência</span>}
                </div>

                <div className="container-especi">
                <h2>Selecione suas especializações:</h2>
                <div className="options-container">
                  {opcoesEspecializacoes.map((opcao, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`opcoesEspecializacoes-${index}`}
                        value={opcao}
                        checked={especializacao.includes(opcao)} // Mantém o estado visual dos checkboxes
                        onChange={handleChangeEspecializacoes} // Função de alteração do estado
                      />
                      <label htmlFor={`opcoesEspecializacoes-${index}`} className="labelespeci">
                        {opcao}
                      </label>
                    </div>
                  ))}
                 </div>
                  {errors.especializacao && <span className='areas'>Selecione pelo menos uma preferência</span>}
                </div>
                  
                </div>
                
              </div>


                <div className='div-buttons-salvar-cancelar'>
                <button className='a' onClick={deletaUsuario}>Excluir conta</button>
                  <button className='a' onClick={sair}> Sair da Conta</button>
                  <button className='a'>Cancelar edição</button>
                  <button className='salva' onClick={handleEditarPerfil}>Salvar</button>
                  
                </div>

        </div>
      </div>
    </div>
  )
}

export default PerfilProfissional
