import '../pages/CSS/EscolhaCadastro.css'
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

  function CadastroSelecao1() {

    const {setPageCadastro} = useContext(GlobalContext);

    setPageCadastro(document.getElementsByName('a'));

    const atender = ["Formado", "Estagiário" ]
    const [atenderSelecionado, setAtenderSelecionado] = useState([])
  
    const selecione = (atender) =>{
      setAtenderSelecionado((prevSelected) =>
      prevSelected.includes(atender)
      ?prevSelected.filter ((a) => a !==atender)
      :[...prevSelected, atender]
      );
    }
    if (atender == "formado") {
      
    }
    ;


  return (

    <div className='selecao'>
        <h3 className='titulo-cadastro'>Selecione um tipo de cadastro</h3>
        <div className='div-atender3'>

     <div className="atender3">

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
    </div>
  )
}

export default CadastroSelecao1