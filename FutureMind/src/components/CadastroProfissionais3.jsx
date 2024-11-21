import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroProfissionais3() {

  const { user } = useContext(GlobalContext);
  const atender = [ "Idosos","PCDs ", "Adultos" ]
  const atender2 =["Crianças", "Adolescentes", "Pré-Adolescentes"]
  const [atenderSelecionado, setAtenderSelecionado] = useState(user.preferencias)


  useEffect(() => {
  
    user.preferencias = atenderSelecionado;
  }, [atenderSelecionado]);
  
  const selecione = (atender) =>{
    setAtenderSelecionado((prevSelected) =>
      prevSelected.includes(atender)
    ?prevSelected.filter ((a) => a !==atender)
    :[...prevSelected, atender]
  );
};

  return (
    <div className='selecao3'>
      <h3 className='titulo-cadastro3'>Eu atendo..</h3>
      <div className='div-atender'>

<div className="atender">

      {atender.map((atender) => (
        <span
        key={atender}
        className={`atender ${atenderSelecionado.includes(atender) ? 'selected' : 'palavras'}`}
        onClick={() => selecione(atender)}
        >
          {atender}
        </span>
      ))}
      </div>
<div className="atender2">

{atender2.map((atender2) => (
  <span
  key={atender2}
  className={`atender2 ${atenderSelecionado.includes(atender2) ? 'selected' : 'palavras'}`}
  onClick={() => selecione(atender2)}
  >
          {atender2}
        </span>
      ))}
      </div>
      </div>
  </div>
  );
}


export default CadastroProfissionais3