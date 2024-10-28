import { useState } from 'react'
import'./CSS/CadastroProfissionais1.css'

function CadastroProfissionais3() {
  const atender = ["Adolescentes", "Idosos","Pré-Adolescentes ","Crianças", "Adultos", "PCDs" ]
  const [atenderSelecionado, setAtenderSelecionado] = useState([])

  const selecione = (atender) =>{
    setAtenderSelecionado((prevSelected) =>
    prevSelected.includes(atender)
    ?prevSelected.filter ((a) => a !==atender)
    :[...prevSelected, atender]
    );
  };

  return (
    <div className='selecao3'>
      <div className='div-atender'>

      <h3 className='titulo-cadastro3'>Eu atendo..</h3>
      {atender.map((atender) => (
        <span
        key={atender}
        className={`atender ${atenderSelecionado.includes(atender) ? 'selected' : ''}`}
        onClick={() => selecione(atender)}
        >
          {atender}
        </span>
      ))}
      </div>
  </div>
  );
}


export default CadastroProfissionais3