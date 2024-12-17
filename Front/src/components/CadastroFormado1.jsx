import { useState }  from "react";
import CrpMask from "./CrpMask";

function CadastroFormado() {

  const [fileName, setFileName] = useState ('nenhum arquivo selecionado')

  const fileChange = (event) => {
    const file =  event.target.files[0]
    if (file) {
      setFileName(file.name)
    }else{
      setFileName('')
    }
  }
  return (
    <div className="selecao1">
      <h3 className='titulo-cadastro2'>Anexe seu CRP</h3>
      <div className="checkboxs2">
        <div className="input-file">
          <input type="file" id="file" name="file" onChange={fileChange}/>
          <label htmlFor="file" className="label-file"> + Arquivo</label>
        </div>
        {fileName && <p className="file-name">Arquivo selecionado: {fileName}</p>}
        <div className="input-text">
          <label htmlFor="crp">CRP:</label> <CrpMask />
        </div>
      </div>
    </div>
  );
}

export default CadastroFormado;