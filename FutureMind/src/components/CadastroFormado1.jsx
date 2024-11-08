import { useState } from "react";

function CadastroFormado() {
  const [fileName, setFileName] = useState ('')

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
          <label htmlFor="crp">CRP:</label>
          <input type="text" id="crp" className="inputCRP" />
        </div>
      </div>
    </div>
  );
}

export default CadastroFormado;