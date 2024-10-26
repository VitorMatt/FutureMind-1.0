import '../pages/CSS/EscolhaCadastro.css'

  function CadastroSelecao1() {

    function a() {

      let inpt = document.getElementsByName('a');

      for (let i=0; i<inpt.length; i++) {

        if (inpt[i].checked) {

          page = inpt[i].value
          break;
        }
      }
    }

    
    const handleRadio = () => {
      
      const radios = document.getElementsByName('a');
      let page = '';
      
      
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          page = radios[i].value;
          break;
        }
      }
      
      if (page === '') {
        alert('Nenhum conteúdo selecionado');
      } else if (page === 'est') {
        return true 
      } else if (page === 'form') {
        
        return false  
      }
    }

  return (

    <div className='selecao'>
        <h3 className='titulo-cadastro'>Selecione npum tipo de cadastro</h3>
        <div className='checkboxs'>
            <div className='estilizacao-check'>
           <input value='est' type="radio" name="a" id="" className='check1' /><label htmlFor="" className='label1'>Sou Estagiário</label>
            </div>

            <div className='estilizacao-check'>
            <input value='form' type="radio" name="a" id="" className='check1'/><label htmlFor="" className='label1'>Sou Formado</label>
            </div>
        </div>
    </div>
  )
}

export default CadastroSelecao1