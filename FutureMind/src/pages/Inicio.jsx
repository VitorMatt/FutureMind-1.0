import Navbar from '../components/Navbar'
import './CSS/Inicio.css'

function Inicio() {
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
              <button>
                Autoaceitação
              </button>
              <button>
                Autoestima
              </button>
              <button>
                Depressão
              </button>
            </div>

            <div className="busca-dois">

            <button>
                Angústia
              </button>
              <button>
                Ansiedade
              </button>
              <button>
                LGBTQIA+
              </button>
            </div>

            <div className="busca-tres">

            <button>
                Autismo
              </button>
              <button>
                Relacionamento
              </button>
              <button>
                Adolescência
              </button>
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
            >

        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className='profissional'>
          <h1>PROFISSIONAL 1</h1>
          
        </div>
        </SwiperSlide>
      </Swiper>
        </div>
        
  
          <div className='titulos'>
            <h1>
              Adultos
            </h1>
          </div>
        <div className='profissional'>
          <h1>PROFISSIONAL 2</h1>
        </div>

        <div className='titulos'>
            <h1>
              Adultos
            </h1>
          </div>
        <div className='profissional'>
          <h1>PROFISSIONAL 3</h1>
        </div>

        <div className='titulos'>
            <h1>
              Adultos
            </h1>
          </div>
        <div className='profissional'>
          <h1>PROFISSIONAL 4</h1>
        </div>

        <div className='titulos'>
            <h1>
              Adultos
            </h1>
          </div>
        <div className='profissional'>
          <h1>PROFISSIONAL 5</h1>
        </div>
        
        
        
        </div>  
      
    </div>
  )
}

export default Inicio
