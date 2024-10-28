function CadastroFormado() {

  
  return (
    

       <div className="selecao1">
      
          <h3 className='titulo-cadastro2'>Anexe seu CRP</h3>
          <div className="checkboxs2">

        <div className="input-file">
          <label htmlFor="file"></label><input type="file" name="file" />
        </div>
        <div className="input-text">
          <label htmlFor="">CRP:</label><input type="text" className="inputCRP"/>
        </div>
          </div>
        </div>

  )
}

export default CadastroFormado