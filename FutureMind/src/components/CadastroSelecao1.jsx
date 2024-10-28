import '../pages/CSS/EscolhaCadastro.css'
import { useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

  function CadastroSelecao1() {

    const {setPageCadastro} = useContext(GlobalContext);

    setPageCadastro(document.getElementsByName('a'));

  return (

    <div className='selecao'>
        <h3 className='titulo-cadastro'>Selecione um tipo de cadastro</h3>
        <div className='checkboxs'>
            <div className='estilizacao-check'>
           <input value='est' type="radio" name="a" className='check1' /><label htmlFor="" className='label1'>Sou Estagiário</label>
            </div>

            <div className='estilizacao-check'>
            <input value='form' type="radio" name="a" className='check1'/><label htmlFor="" className='label1'>Sou Formado</label>
            </div>
        </div>
    </div>
  )
}

export default CadastroSelecao1