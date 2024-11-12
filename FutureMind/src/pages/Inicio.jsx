import { useState } from 'react';
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

  const especialidades = ["PCD's", 'Autoestima', 'Angústia', 'Depressão', 'LGBTQIA+'];
  const [click, setClick] = useState(false);

  const clickUm = (index) => {

    const buscaUmAux = [...buscaUm];
    buscaUmAux[index].selecionado = !buscaUmAux[index].selecionado;
    setBuscaUm(buscaUmAux);
  }

  const clickDois = (index) => {

    const buscaDoisAux = [...buscaDois];
    buscaDoisAux[index].selecionado = !buscaDoisAux[index].selecionado;
    setBuscaDois(buscaDoisAux);
  }

  const clickTres = (index) => {

    const buscaTresAux = [...buscaTres];
    buscaTresAux[index].selecionado = !buscaTresAux[index].selecionado;
    setBuscaTres(buscaTresAux);
  }

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



  const [estadoBotao, setEstadoBotao] = useState('inicial'); 

  const exibirAnimacaoConcluido = () => {
    setEstadoBotao('carregando');
    setTimeout(() => {
      setEstadoBotao('concluido');
    }, 1500);
    setTimeout(() => {
      setEstadoBotao('inicial');
    }, 3500);
  };

  const handleAgendamento = () => {
    setClick(!click);
    if (selectedDate && selectedTime) {
      console.log(`Agendado para ${selectedDate} às ${selectedTime}`);
    }
    exibirAnimacaoConcluido();
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
            <button>
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

        <SwiperSlide>

        <div className='profissional'>
          <div className="lado-esquerdo">
            <div className="coluna-um">
              <div className="foto-perfil">
                <img src="joao_peedro.png"className="foto-perfil-img" />
              </div>
              <div className="coluna-informacoes">
                <div className="valor">
                  <h1 style={{color: 'black'}}>
                  R$ 30 - 40min
                  </h1>
                  </div>
                <div className="especialidades">
                  {

                    especialidades.map((item, index) => (
                      <div key={index} className='especialidade-button'>
                      {item}
                    </div>
                  ))
                }
                </div>
                <div className="crp-div">
                  <h1 style={{color: 'black'}}>
                  CRP: 98/94743
                  </h1>
                  </div>
              </div>
            </div>
            <div className="coluna-dois">
              <div className="nome-profissional">
                <h1 className="nome-text">
                  João Miguel da Cruz
                </h1>
              </div>
              <div className="sobre-mim-profissional">
                <h1 className="sobremim-title">
                  Sobre mim:
                </h1>
                <p className="sobremim-text">
                Psicológo recém formado em Psicanálise atendimento a adolscente, adultos e casais. Atendo oito meses como psicólogo clinico em diferentes situações psicoafetivas, dependencia química, estados depressivos, luto, alternãncia de humor, baixa alto estima, estados de angústia e desorganização pessoal.
                </p>
              </div>
              <div className="abordagem">
                <h1 className="abordagem-title">
                  Abordagem:
                </h1>
                <p className="abordagem-text">
                Psicanalista, Terapia Cognitiva
                Comportamental
                </p>
              </div>
            </div>
          </div>
          <div className="lado-direito">

          <div className="agenda">

<div className="botao">

          <div>

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
          onClick={handleAgendamento}
          disabled={!selectedTime}
          >
            <b>
      {estadoBotao === 'carregando' && <div id="circle" className="circle"></div>}
      {estadoBotao === 'concluido' && <img id="icon-concluido" src="check.svg" alt="" />}
      {estadoBotao === 'inicial' && <span className="btn-text"> {
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
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 5</h1>
          </div>
        </SwiperSlide>
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
  >

<SwiperSlide>

<div className='profissional'>
<h1>PROFISSIONAL 1</h1>

</div>
</SwiperSlide>
<SwiperSlide>

<div className='profissional'>
<h1>PROFISSIONAL 2</h1>

</div>
</SwiperSlide>
<SwiperSlide>
<div className="profissional">
  <h1>PROFISSIONAL 3</h1>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="profissional">
  <h1>PROFISSIONAL 4</h1>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="profissional">
  <h1>PROFISSIONAL 5</h1>
</div>
</SwiperSlide>
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
            >

        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 5</h1>
          </div>
        </SwiperSlide>
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
            >

        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 5</h1>
          </div>
        </SwiperSlide>
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
            >

        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 5</h1>
          </div>
        </SwiperSlide>
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
            >

        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 5</h1>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>

        <div className='titulos'>
            <h1>
              PCD's
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
            >

        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 3</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 4</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profissional">
            <h1>PROFISSIONAL 5</h1>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
        
        
        </div>  
    <Footer /> 
    </div>
    
  )
}

export default Inicio