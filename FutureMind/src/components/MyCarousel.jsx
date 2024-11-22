import React, { useEffect, useRef, useState } from 'react';
import './CSS/MyCarousel.css';

export function MyCarousel() {
  const imgsRef = useRef(null);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prev) => (prev + 1) % 4); // Assume que existem 3 imagens
    }, 3800);

    return () => clearInterval(intervalo); // Limpar intervalo ao desmontar
  }, []);

  useEffect(() => {
    if (imgsRef.current) {
      imgsRef.current.style.transform = `translateX(${-contador * 559}px)`;
    }
  }, [contador]);

  return (
    <div className="carrossel_ajuste">
      <div className="carrossel">
        <div className="containerA" ref={imgsRef}>
          <img src="Frame 1.svg" alt="Imagem 1" />
          <img src="Frame 2.svg" alt="Imagem 2" />
          <img src="Frame 3.svg" alt="Imagem 3" />
          <img src="Frame 4.svg" alt="Imagem 4" />

<<<<<<< HEAD
    <div className="carrossel">
        <div className="containerA" id="img">
            <script onLoad={carrossel}>
                
            </script>
            <img src="Frame 12.svg" />
            <img src="Frame 13.svg" />
            <img src="Frame 16.svg" />
=======
>>>>>>> f0eb00f0dbfb0795e6d7bc5b56fc1034d994c21d
        </div>
      </div>
    </div>
  );
}