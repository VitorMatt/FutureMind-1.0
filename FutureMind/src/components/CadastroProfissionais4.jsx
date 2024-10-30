import { useState } from "react";


function CadastroProfissionais4() {
  const atender = ["Relacionamento", "Depressão","Angústia ","Ansiedade", "Bullying", "Autoaceitação", "LGBTQIA", "Adolesência" ]
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
      <h3 className='titulo-cadastro3'>Tenho especialização..</h3>
     <div className='div-atender'>
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
  )
}


export default CadastroProfissionais4