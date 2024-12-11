import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais3() {

  const { profissional, setProfissional } = useContext(GlobalContext);
  
  const atender = ["Idosos", "PCDs", "Adultos"];
  const atender2 = ["Crianças", "Adolescentes", "Pré-Adolescentes"];
  const [atenderSelecionado, setAtenderSelecionado] = useState(profissional.preferencias); // Definindo o estado com o valor inicial
  const { atendeValid, setAtendeValid } = useContext(GlobalContext);

  
  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      preferencias: atenderSelecionado, // Atualiza apenas o campo atenderSelecionado
    }));
  }, [atenderSelecionado, setProfissional]);

  
  useEffect(() => {
    setAtendeValid(atenderSelecionado.length === 0); 
  }, [atenderSelecionado, setAtendeValid]);

 
  const selecione = (item) => {
    setAtenderSelecionado((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((a) => a !== item)
        : [...prevSelected, item]
    );
  };

  return (
    <div className='selecao3'>
      <h3 className='titulo-cadastro3'>Eu atendo..</h3>
      <div className='div-atender'>
        <div className="atender">
          {atender.map((item) => (
            <span
              key={item}
              className={`atender ${atenderSelecionado.includes(item) ? 'selected' : 'palavras'}`}
              onClick={() => selecione(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="atender2">
          {atender2.map((item) => (
            <span
              key={item}
              className={`atender2 ${atenderSelecionado.includes(item) ? 'selected' : 'palavras'}`}
              onClick={() => selecione(item)}
            >
              {item}
            </span>
          ))}
        </div> 
      </div>
      {atendeValid && (
          <div className="error-message">
            Selecione no minimo 1 area de atendimento
          </div>
        )}
    </div>
  );
}

export default CadastroProfissionais3;
