
import Navbar from "../components/Navbar"
import './CSS/Adm.css'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Adm() {

      const Profissionais = 
      
        [

          {img: 'renato.png' ,nome: 'Renato Garcia', instagram: '@RenatoGarcia' , idade: 36, descrição: 'Ola eu sou o Renato', atende: 'Adolescentes, Idosos, Crianças.', especialização: 'Bullying, Autoaceitação'},
          {img: 'joao_peedro.png', nome: 'Pedro Henrique', instagram: '@PedroHenrique' , idade: 27, descrição: 'Ola eu sou o Pedro', atende: 'Adolesentes, PCDs, Idosos.', especialização: 'Depressão, Adolescência'},
          {img: 'jessica.png' ,nome: 'Luiza Souza', instagram: '@LuizaSousa' , idade: 23, descrição: 'Ola eu sou a Luiza', atende: 'Pré-Adolescentes, Crianças, Adolecentes.', especialização: 'Angústia, Relacionamentos'},
        
        ]
      
      const Paciente =
      
        [
         
          {nome: 'Mateus da silva', }
        ]



  return (
    <div className="bory-container">
      <Navbar/>
       <h1 className="h1_Profissionais_adm">Profissionais:</h1>
       <div className="container_padrao_adm">
         <div style={{width: '100%',}}>
       <Swiper
                // instalar módulos do Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={1}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className = 'div_s'
            >
        {
        
         
         Profissionais.map((p, index) => (

        <SwiperSlide>
         <div 
          key={index}
          className="Div_profissionais_adm"
          style={{width: "70%", }}
          >
          <div className="div_um_interna_profissional">

            <img src={p.img} />
            <p className="arroba_profissionais">{p.instagram}</p>
            <div className="div_botao_um_adm">
              <button className="botoes_adm">Deletar</button>
            </div>
            <div className="div_botao_dois_adm">
              <button className="botoes_adm">Editar</button>
            </div>
          </div>
          <div className="div_dois_interna_profissional">
             <h1>{p.nome}</h1> 
             <p className="p_padrao">Eu atendo...</p>
             <p className="informacao_geral">{p.atende}</p>
             <p className="p_padrao">Especialidade(s):</p>
             <p className="informacao_geral">{p.especialização}</p>
          </div>
         </div>
         </SwiperSlide>

         ))
        }
      </Swiper>
        </div>
       </div>
       <h1 className="h1_Paciente_adm">Paciente:</h1>
    </div>
  )
}

export default Adm
