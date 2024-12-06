
import './CSS/Profissionais3.css'
import HorizontalLinearAlternativeLabelStepper from './HorizontalLinearAlternativeLabelStepper'

import CpfInputPaciente from '../components/CpfInputPaciente'
import TelefoneMaskPaciente from '../components/TelefoneMaskPaciente'

function CadastroPaciente2() {
  
  
    return (
      <div className="selecao1">
      
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">CPF</label><CpfInputPaciente />
    </div>
    <div className="input-text">
      <label htmlFor="">Telefone</label><TelefoneMaskPaciente />
    </div>
      </div>
    </div>
    )
  }
  
  
  
  export default CadastroPaciente2
