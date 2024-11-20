import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'

function CadastroProfissionais3() {
  const atender = ["Adolescência", "Depressão","Angústia","Ansiedade" ]
  const atender2 =["Bullying", "LGBTQIA+", "Relacionamentos", "Autoaceitação"]
  const [atenderSelecionado, setAtenderSelecionado] = useState([])

  const { user } = useContext(GlobalContext);

  useEffect(() => {

    user.especializacao = atenderSelecionado;
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
      <h3 className='titulo-cadastro3'>Sou especializado..</h3>
      <div className='div-atender2'>

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