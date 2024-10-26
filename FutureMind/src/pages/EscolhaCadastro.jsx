import './CSS/EscolhaCadastro.css'

function EscolhaCadastro() {
<<<<<<< HEAD
  
  function verifica() {
    
    const radio = document.getElementsByName('a')
    let page;

    for (let i=0; i<radio.length; i++) {

      if (radio[i].checked) {

        page = radio[i].value
        break;
      }
    }
    return page
  }
=======
>>>>>>> 739fce62e69ac0ec7789f39cf1adbae87aba341b

  function direcionaCadastro() {

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
    } else if (page === 'pr') {
      window.location.href = '/cadastro-profissional'; 
    } else if (page === 'pa') {

      window.location.href = '/cadastro-paciente';  
    }
  }

  return (
    <div className='escolhaCadastro-container'>
      <div className='Lado-esquerdo'>
        <h3 className='titulo-Cadastro'>Selecione um tipo de cadastro:</h3>
        <div className='checkboxs'>
            <div className='estilização-Check'>
              <input value='pr' type="radio" name="a" id="check1" className='check1' />
              <label htmlFor="check1" className='label1'>Sou Profissional</label>
            </div>

            <div className='estilização-Check'>
              <input value='pa' type="radio" name="a" id="check2" className='check1' />
              <label htmlFor="check2" className='label1'>Sou Paciente</label>
            </div>
            
            <div className='Proximo'>
              <div className='botao1'>
                <button className='proximo-estilizado'>Entrar</button>
              </div>
              <div className='botao2'>
                <button onClick={direcionaCadastro} className='proximo-estilizado'>Próximo</button>
              </div>
            </div>
        </div>
      </div>
      <div className='lado-Direito'>
        <div className='arvore'>
         <img src='logoLogin.png' alt="" className='arvore-estilizada'/>
        </div>
      </div>
    </div>
  );
}

export default EscolhaCadastro;