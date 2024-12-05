import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './CSS/Inicio.css';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../components/Footer';

function Inicio() {

  const [buscaUm, setBuscaUm] = useState([{descricao: 'Autoaceitação', selecionado: false}, {descricao: 'Autoestima', selecionado: false}, {descricao: 'Depressão', selecionado: false}]);
  const [buscaDois, setBuscaDois] = useState([{descricao: 'Angústia', selecionado: false}, {descricao: 'Ansiedade', selecionado: false}, {descricao: 'LGBTQIA+', selecionado: false}]);
  const [buscaTres, setBuscaTres] = useState([{descricao: "PCD's", selecionado: false}, {descricao: 'Relacionamento', selecionado: false}, {descricao: 'Adolescência', selecionado: false}]);

  const [click, setClick] = useState(false);

  const [profissionais, setProfissionais] = useState([]);
  const [adultos, setAdultos] = useState([]);
  const [adolescentes, setAdolescentes] = useState([]);
  const [criancas, setCriancas] = useState([]);
  const [pre_adolescentes, setPre_adolescentes] = useState([]);
  const [pcds, setPcds] = useState([]);
  const [idosos, setIdosos] = useState([]);
  
  const fetchProfissionais = async () => {
    try {
      const response = await fetch('http://localhost:3000');
      const data = await response.json();
      setProfissionais(data);
    } catch (err) {
      console.log('Erro ao buscar profissionais:', err.message);
    }
  };


    


  const filtraProfissionais = () => {
    if (!profissionais || profissionais.length === 0) return;
    profissionais.forEach((profissional) => {
      if (profissional.preferencias.includes('Adultos')) {
        setAdultos((prev) => [...prev, profissional]);
      }
      if (profissional.preferencias.includes('Idosos')) {
        setIdosos((prev) => [...prev, profissional]);
      }
      if (profissional.preferencias.includes('Crianças')) {
        setCriancas((prev) => [...prev, profissional]);
      }
      if (profissional.preferencias.includes('PCDs')) {
        setPcds((prev) => [...prev, profissional]);
      }

   if (profissional.preferencias.includes('Pré-Adolescentes')) {

    setPre_adolescentes((prev) => [...prev, profissional]);


    }
     if (profissional.preferencias.includes('Adolescentes')) {
      setAdolescentes((prev) => [...prev, profissional]);
     }
     });
   };
  

  const handleReplace = () => {
    if (!profissionais || profissionais.length === 0) return;

    for (let i=0; i<profissionais.length; i++) {

      profissionais[i].especializacao = profissionais[i].especializacao.replace('{', '');
      profissionais[i].especializacao = profissionais[i].especializacao.replace('}', '');
      profissionais[i].preferencias = profissionais[i].preferencias.replace('}', '');
      profissionais[i].preferencias = profissionais[i].preferencias.replace('{', '');
     
     for (let j=0; j<(profissionais[i].especializacao.length * 2); j++) {
    
      profissionais[i].especializacao = profissionais[i].especializacao.replace('"', '');
     }
    
     for (let k=0; k<(profissionais[i].preferencias.length * 2); k++) {
    
      profissionais[i].preferencias = profissionais[i].preferencias.replace('"', '');
     }
    
     profissionais[i].preferencias = profissionais[i].preferencias.split(',').map(item => item.trim()); 
     profissionais[i].especializacao = profissionais[i].especializacao.split(',').map(item => item.trim()); 
    }
  };

  useEffect(() => {
    fetchProfissionais();
  }, []);

  useEffect(() => {
    if (profissionais.length > 0) {
      handleReplace();
      filtraProfissionais();
    }
  }, [profissionais]);
    
    const [estadoBotoes, setEstadoBotoes] = useState(
      profissionais.reduce((acc, profissional) => {
        acc[profissional.id] = 'inicial';
        return acc;
      }, {})
    );


  const getWeekDays = (startDate) => {
    const days = [];
    const current = new Date(startDate);
  
    // Ajuste para começar na última segunda-feira
    const dayOfWeek = current.getDay();
    const offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Se for domingo, ajusta para -6
    current.setDate(current.getDate() + offset);
  
    // Adiciona os dias da semana a partir da segunda-feira
    for (let i = 0; i < 5; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
  
    return days;
  };
  
  const horariosDisponiveis = {
    "07:00": true,
    "07:30": true,
    "08:00": true,
    "08:30": true,
    "09:00": true,
  };
  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date()); // Inicializa com a semana atual

  // Função para formatar data
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Dias da semana com base na data de início da semana
  const diasSemana = getWeekDays(currentWeekStart);

  // Manipula a navegação para a semana anterior
  const handlePreviousWeek = () => {
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newStartDate);
  };

  // Manipula a navegação para a próxima semana
  const handleNextWeek = () => {
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newStartDate);
  };

  const exibirAnimacaoConcluido = (id) => {
    setEstadoBotoes((prev) => ({ ...prev, [id]: 'carregando' }));
    setTimeout(() => {
      setEstadoBotoes((prev) => ({ ...prev, [id]: 'concluido' }));
    }, 1500);
    setTimeout(() => {
      setEstadoBotoes((prev) => ({ ...prev, [id]: 'inicial' }));
    }, 3500);
  };

  const [agendamento, setAgendamento] = useState({});
  const userLog = JSON.parse(localStorage.getItem('User'));

  const handleAgendamento = async(id) => {

    if (selectedDate && selectedTime) {
      console.log(`Agendado para ${selectedDate} às ${selectedTime} com profissional ${id}`);
    }

    setAgendamento({horario: selectedTime, data: selectedDate, profissional: id, paciente: userLog.id_paciente});
    try {

      const response = await fetch('http://localhost:3000/agendamento', {
        
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(agendamento)
      });
    } catch (err) {

      console.log('Erro');
    }
    exibirAnimacaoConcluido(id);
  };

  const [result, setResult] = useState('')

  const buscarProfissionais = async () => {
    try {
        const queryString = preferenciasSelecionadas.join(','); 
        const response = await fetch(`http://localhost:3000/api/profissionais?preferencias=${encodeURIComponent(queryString)}`);
        const data = await response.json();
        setResult(data)
        console.log(data); 
    } catch (error) {
        console.error('Erro ao buscar profissionais:', error.message);
    }
};

const [preferenciasSelecionadas, setPreferenciasSelecionadas] = useState([]);

const togglePreferencia = (descricao) => {
    setPreferenciasSelecionadas((prev) =>
        prev.includes(descricao)
            ? prev.filter((item) => item !== descricao) // Remove se já está selecionada
            : [...prev, descricao] // Adiciona se não está selecionada
    );
};

const clickUm = (index) => {
    buscaUm[index].selecionado = !buscaUm[index].selecionado;
    togglePreferencia(buscaUm[index].descricao);
};

const clickDois = (index) => {
    buscaDois[index].selecionado = !buscaDois[index].selecionado;
    togglePreferencia(buscaDois[index].descricao);
};

const clickTres = (index) => {
    buscaTres[index].selecionado = !buscaTres[index].selecionado;
    togglePreferencia(buscaTres[index].descricao);
};

  return (
    <div className='inicio-container'>
      <Navbar />            
    
      <div className='busca'>
        <div className="esquerda">

          <div className="text-container">
            <h1>Encontre seu psicólogo</h1>
          </div>

          <div className="temas-busca">

            <div className="busca-um">
              {
              buscaUm.map((item, index) => (

                
                <button key={index} onClick={() => clickUm(index)} className={item.selecionado ? 'button-clicked' : 'button'}>
                  {item.descricao}
                </button>
              
              ))
              }
            </div>

            <div className="busca-dois">

            {
              buscaDois.map((item, index) => (

                <button key={index} onClick={() => clickDois(index)} className={item.selecionado ? 'button-clicked' : 'button'}>
                  {item.descricao}
                </button>
              ))
              }
            </div>

            <div className="busca-tres">

            {
              buscaTres.map((item, index) => (

                <button key={index} onClick={() => clickTres(index)} className={item.selecionado ? 'button-clicked' : 'button'}>
                  {item.descricao}
                </button>
              ))
              }
            </div>
          </div>
          <div className="button-container">
          <button onClick={buscarProfissionais}>
               Buscar
          </button>
          </div>
        </div>

        <div className="direita">

          <div className="imgInicio">
            <img src='imgInicio.svg' />
          </div>

        </div>
      </div >

  
      <div className='profissionais'>
        <div className='titulo-inicio'>
            <h1>
              Início
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                profissionais?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                  {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>

          <div>
      {/* Mês e Ano Dinâmico */}
      <div className="month-year">
        <h2>
          {diasSemana.length > 0 &&
            diasSemana[0].toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })
            .replace(".", "") 
            .replace(" de ", " ")}
        </h2>
      </div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}><img src='seta1.svg' /></button>
            
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric"}).replace('.', '').replace(',', '')}</th>
                  ))}
              </tr>
            </thead>
            <button onClick={handleNextWeek}><img id='seta2' src='seta2.svg' /></button>
          </div>
          <table>

            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                          setClick(false);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div className='btn-consulta'>
            {selectedTime ? (
              <button
                id="agendar"
                onClick={() => handleAgendamento(item.id_profissional)}
              >
                <b>
                  {estadoBotoes[item.id_profissional] === 'carregando' && (
                    <div id="circle" className="circle"></div>
                  )}
                  {estadoBotoes[item.id_profissional] === 'concluido' && (
                    <img id="icon-concluido" src="check.svg" alt="" />
                  )}
                  {estadoBotoes[item.id_profissional] === 'inicial' && (
                    <span className="btn-text2">
                      {selectedTime
                        ? `Marcar para ${selectedTime}`
                        : "Marcar Consulta"}
                    </span>
                  )}
                </b>
              </button>
            ) : (
              
              <p className="selecione-horario">Selecione um horário acima para agendar</p>
            )}
          </div>

            </div>
          </div>
        </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>
        
  
          <div className='titulos'>
            <h1>
              Adultos
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                adultos?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>
          <div>
      {/* Mês e Ano Dinâmico */}
      <div className="month-year">
        <h2>
          {diasSemana.length > 0 &&
            diasSemana[0].toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            }).replace(".", "") 
            .replace(" de ", " ")}
        </h2>
      </div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}><img src='seta1.svg' /></button>
            
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric"}).replace('.', '').replace(',', '')}</th>
                  ))}
              </tr>
            </thead>
            <button onClick={handleNextWeek}><img id='seta2' src='seta2.svg' /></button>
          </div>
          <table>

            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                          setClick(false);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div className='btn-consulta'>


        <button 
          id="agendar"
          onClick={() => handleAgendamento(item.id_profissional)}
          disabled={!selectedTime}
          >
            <b>
      {estadoBotoes[item.id_profissional] === 'carregando' && <div id="circle" className="circle"></div>}
      {estadoBotoes[item.id_profissional] === 'concluido' && <img id="icon-concluido" src="check.svg" alt="" />}
      {estadoBotoes[item.id_profissional] === 'inicial' && <span className="btn-text2"> {
                selectedTime
            ? `Marcar para ${selectedTime}`
            : "Marcar Consulta"
              }</span>}
               
            </b>
        </button>
            </div>
            </div>
          </div>
        </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>

        <div className='titulos'>
            <h1>
              Idosos
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                idosos?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                   {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">


    <div>
      {/* Mês e Ano Dinâmico */}
      <div className="month-year">
        <h2>
          {diasSemana.length > 0 &&
            diasSemana[0].toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            }).replace(".", "") 
            .replace(" de ", " ")}
        </h2>
      </div>

      {/* Botões para navegar entre as semanas */}
      <div className="week-navigation">
        <button onClick={handlePreviousWeek}>
          <img src="seta1.svg" alt="Semana Anterior" />
        </button>

        <thead>
          <tr>
            {diasSemana.map((dia) => (
              <th key={dia}>
                {dia
                  .toLocaleDateString("pt-BR", {
                    weekday: "short",
                    day: "numeric",
                  })
                  .replace(".", "")
                  .replace(",", "")}
              </th>
            ))}
          </tr>
        </thead>

        <button onClick={handleNextWeek}>
          <img id="seta2" src="seta2.svg" alt="Próxima Semana" />
        </button>
      </div>

      <table>
        <tbody>
          {/* Exibir horários para cada dia da semana */}
          {Object.keys(horariosDisponiveis).map((hora, index) => (
            <tr key={index}>
              {diasSemana.map((dia) => (
                <td key={dia}>
                  {horariosDisponiveis[hora] ? (
                    <button
                      className={
                        selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                      }
                      onClick={() => {
                        setSelectedDate(formatDate(dia));
                        setSelectedTime(hora);
                      }}
                    >
                      {hora}
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="btn-consulta">
        <button
          id="agendar"
          onClick={() => handleAgendamento(item.id_profissional)}
          disabled={!selectedTime}
        >
          <b>
            {estadoBotoes[item.id_profissional] === "carregando" && (
              <div id="circle" className="circle"></div>
            )}
            {estadoBotoes[item.id_profissional] === "concluido" && (
              <img id="icon-concluido" src="check.svg" alt="" />
            )}
            {estadoBotoes[item.id_profissional] === "inicial" && (
              <span className="btn-text2">
                {selectedTime
                  ? `Marcar para ${selectedTime}`
                  : "Marcar Consulta"}
              </span>
            )}
          </b>
        </button>
      </div>
    </div>
    </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>

        <div className='titulos'>
            <h1>
              Pré-adolescentes
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                pre_adolescentes?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                   {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>

          <div className="month-year">
  <h2>
    {diasSemana.length > 0 &&
      diasSemana[0].toLocaleDateString("pt-BR", {
        month: "long",
        year: 'numeric',
      })
        .replace(".", "") 
        .replace(" de ", " ")} 
  </h2>
</div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}><img src='seta1.svg' /></button>
            
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric"}).replace('.', '').replace(',', '')}</th>
                  ))}
              </tr>
            </thead>
            <button onClick={handleNextWeek}><img id='seta2' src='seta2.svg' /></button>
          </div>
          <table>

            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                          setClick(false);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div className='btn-consulta'>


        <button 
          id="agendar"
          onClick={() => handleAgendamento(item.id_profissional)}
          disabled={!selectedTime}
          >
            <b>
      {estadoBotoes[item.id_profissional] === 'carregando' && <div id="circle" className="circle"></div>}
      {estadoBotoes[item.id_profissional] === 'concluido' && <img id="icon-concluido" src="check.svg" alt="" />}
      {estadoBotoes[item.id_profissional] === 'inicial' && <span className="btn-text2"> {
                selectedTime
            ? `Marcar para ${selectedTime}`
            : "Marcar Consulta"
              }</span>}
               
            </b>
        </button>
            </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>

        <div className='titulos'>
            <h1>
              Adolescentes
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                adolescentes?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                   {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>

            {/* Mês e Ano Dinâmico */}
      <div className="month-year">
        <h2>
          {diasSemana.length > 0 &&
            diasSemana[0].toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })
            .replace(".", "") 
            .replace(" de ", " ")}
        </h2>
      </div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}><img src='seta1.svg' /></button>
            
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric"}).replace('.', '').replace(',', '')}</th>
                  ))}
              </tr>
            </thead>
            <button onClick={handleNextWeek}><img id='seta2' src='seta2.svg' /></button>
          </div>
          <table>

            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                          setClick(false);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div className='btn-consulta'>


        <button 
          id="agendar"
          onClick={() => handleAgendamento(item.id_profissional)}
          disabled={!selectedTime}
          >
            <b>
      {estadoBotoes[item.id_profissional] === 'carregando' && <div id="circle" className="circle"></div>}
      {estadoBotoes[item.id_profissional] === 'concluido' && <img id="icon-concluido" src="check.svg" alt="" />}
      {estadoBotoes[item.id_profissional] === 'inicial' && <span className="btn-text2"> {
                selectedTime
            ? `Marcar para ${selectedTime}`
            : "Marcar Consulta"
              }</span>}
               
            </b>
        </button>
            </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>

        <div className='titulos'>
            <h1>
              Crianças
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                criancas?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                   {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>

            {/* Mês e Ano Dinâmico */}
      <div className="month-year">
        <h2>
          {diasSemana.length > 0 &&
            diasSemana[0].toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })
            .replace(".", "") 
            .replace(" de ", " ")}
        </h2>
      </div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}><img src='seta1.svg' /></button>
            
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric"}).replace('.', '').replace(',', '')}</th>
                  ))}
              </tr>
            </thead>
            <button onClick={handleNextWeek}><img id='seta2' src='seta2.svg' /></button>
          </div>
          <table>

            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                          setClick(false);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div className='btn-consulta'>


        <button 
          id="agendar"
          onClick={() => handleAgendamento(item.id_profissional)}
          disabled={!selectedTime}
          >
            <b>
      {estadoBotoes[item.id_profissional] === 'carregando' && <div id="circle" className="circle"></div>}
      {estadoBotoes[item.id_profissional] === 'concluido' && <img id="icon-concluido" src="check.svg" alt="" />}
      {estadoBotoes[item.id_profissional] === 'inicial' && <span className="btn-text2"> {
                selectedTime
            ? `Marcar para ${selectedTime}`
            : "Marcar Consulta"
              }</span>}
               
            </b>
        </button>
            </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>

        <div className='titulos'>
            <h1>
              {"PCD's"}
            </h1>
          </div>
          <div style={{width: '100%'}}>

          <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-profissional'
            >
              {

                pcds?.map((item, index) => (
                  
        <SwiperSlide key={index}>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src={item.foto} className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ {item.preco}
                  </h1>
                  </div>
                <div className="especialidades">
                   {
                    Array.isArray(item.especializacao) &&
                    item.especializacao.map((a, b) => (
                      <div key={b} className="especialidade-button">
                        {a}
                      </div>
                    ))
                  }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>

                  CRP: {item.crp}
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  {item.nome_completo}
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                  {item.descricao}
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                {item.abordagem}
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>

          <div>
      {/* Mês e Ano Dinâmico */}
      <div className="month-year">
        <h2>
          {diasSemana.length > 0 &&
            diasSemana[0].toLocaleDateString("pt-BR", {
              month: "long",
              year: "numeric",
            })
            .replace(".", "") 
            .replace(" de ", " ")}
        </h2>
      </div>

          {/* Botões para navegar entre as semanas */}
          <div className="week-navigation">
            <button onClick={handlePreviousWeek}><img src='seta1.svg' /></button>
            
            <thead>
              <tr>
                {diasSemana.map((dia) => (
                  <th key={dia}>{dia.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric"}).replace('.', '').replace(',', '')}</th>
                  ))}
              </tr>
            </thead>
            <button onClick={handleNextWeek}><img id='seta2' src='seta2.svg' /></button>
          </div>
          <table>

            <tbody>
              {/* Exibir horários para cada dia da semana */}
              {Object.keys(horariosDisponiveis).map((hora, index) => (
                <tr key={index}>
                  {diasSemana.map((dia) => (
                    <td key={dia}>
                      {horariosDisponiveis[hora] ? (
                        <button 
                        className= {
                          selectedDate === formatDate(dia) && selectedTime === hora
                          ? "selected"
                          : "agendar"
                        }
                        onClick={() => {
                          setSelectedDate(formatDate(dia));
                          setSelectedTime(hora);
                          setClick(false);
                        }}
                        >
                          {hora}
                        </button>
                      ) : (
                        "-"
                        )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        </div>
        <div className='btn-consulta'>


        <button 
          id="agendar"
          onClick={() => handleAgendamento(item.id_profissional)}
          disabled={!selectedTime}
          >
            <b>
      {estadoBotoes[item.id_profissional] === 'carregando' && <div id="circle" className="circle"></div>}
      {estadoBotoes[item.id_profissional] === 'concluido' && <img id="icon-concluido" src="check.svg" alt="" />}
      {estadoBotoes[item.id_profissional] === 'inicial' && <span className="btn-text2"> {
                selectedTime
            ? `Marcar para ${selectedTime}`
            : "Marcar Consulta"
              }</span>}
               
            </b>
        </button>
            </div>
            </div>
          </div>
        </div>
        </div>
        </SwiperSlide>
                ))
              }
      </Swiper>
        </div>
        
        
        </div>  
    <Footer /> 
    </div>
    
  )}

export default Inicio;