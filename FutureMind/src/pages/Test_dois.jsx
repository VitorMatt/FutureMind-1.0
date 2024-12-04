import React, { useState } from 'react';
import './CSS/Test_dois.css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Test_dois() {
  const [nota, setNota] = useState('');
  const [notas, setNotas] = useState([]);

  const adicionarNota = () => {
    if (nota.trim() !== '') {
      setNotas([...notas, nota]); // Adiciona a nova anotação à lista
      setNota(''); // Limpa o campo de entrada
    }
  };

  return (
    <div className="App">
      <h1>Notas</h1>

      <input
        type="text"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        className="nota-input"
        placeholder="Digite sua anotação"
      />
      <button onClick={adicionarNota} className="add-btn">
        Enviar
      </button>

      {/* Exibe as notas com o Swiper */}
      <div className="swiper-container">
        <Swiper 

          modules={[Navigation, Pagination, A11y]}
          spaceBetween={1}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        
        >
          {notas.map((nota, index) => (
            <SwiperSlide key={index}>
              <div className="nota-slide">
                <p>{nota}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Test_dois