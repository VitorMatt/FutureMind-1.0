import './CSS/Profissionais3.css'
import CpfInput from './CpfInput';
import TelefoneMask from './TelefoneMask';

function CadastroProfissionais6() {

    return (
      <div className="selecao1">
      
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">CPF</label><CpfInput />
    </div>
    <div className="input-text">
      <label htmlFor="">Telefone</label><TelefoneMask />
    </div>
      </div>
    </div>
    )
  }
  
  
  
  export default CadastroProfissionais6