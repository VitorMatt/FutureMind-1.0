import {useState, useEffect, useContext } from 'react'
import './CSS/PerfilVisualizar.css'
import { GlobalContext } from '../GlobalContext/GlobalContext';


function PerfilVisualizar() {

  const [profissional, setProfissional] = useState({

    preferencias: [],
    especializacao: []
  });
  const { id } = useContext(GlobalContext);
  
  useEffect(() => {
    if (id != null) {
      handleGet();
    } else {
      alert('Erro: ID não está definido.');
    }
  }, []); // O useEffect será disparado sempre que `id` mudar.
  

  // const handleReplace = () => {

  //   for (var i)
 
  //     profissional.especializacao = profissional.especializacao.replace('{', '');
      
  //     .split(',').map(item => item.trim());
  
  //   if (profissional.preferencias) {
  //     profissional.preferencias = profissional.preferencias.replace(/[{}"]/g, '').split(',').map(item => item.trim());
  //   }
  // }


    const handleGet = async() => {

      const response = await fetch(`http://localhost:3000/profissional/${id}`);

      if (response.ok) {

        const data = await response.json();
        setProfissional(data);
        alert(data)
      } else {

        alert('p')
      }
    }
    // const profissional = 
   
  //  [
// 
  //     { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descrição: 'Oie,eu sou o João Miguel e sou um ótimo profissional na minha área.',}

  //  ]

  return (
    <div className='perfilVisu-container'>
           <div className='perfil-profissional'>
            <div className='titulo-perfil'>
                <h1>Perfil </h1>
            </div>
            
                <div>

                 <div className='div-foto-nome'>
                    <div className='foto-usuario'>
                        <img src='/imgVisu.png' className='a-foto'/>
                    </div>
                    
                    <div className='nick-usuario'>
                        <h1>{profissional.nome_completo}</h1>
                        <p>{profissional.email}</p>
                    </div>
                 </div>
    
                 <div className='div-info'>
                    <div className='descricao'>
                        
                        <p>Descrição:</p>
                        <textarea readOnly maxLength="132">{profissional.descricao}</textarea>
                    </div>
                 </div>

    
                </div>
            
            </div>
            {/* <div className='anotações-profissional'>
              <div className='titulo-perfil'>
               <h1>Anotações</h1>
              </div>
              <div className='input-button'>
                <div className='input-anotações'>
                 <textarea className='text-anota' placeholder='Digite aqui...'/>
                </div>
                <div className='button-anotações'>
                 <button>Enviar</button>
                </div>
              </div>
              <div className='div-anotações'>

             </div>
            </div> */}
           
       <div className='editar-perfil-profissional'>
        <div className='titulo-perfil'>
         <h1>Editar Perfil</h1>
        </div>
        <div className='container-inputs-editar'>
         <div className='div1-editar'>
          <p>Nome Completo</p>
          <input type="text" placeholder='Digite seu nome completo...'/>

          <p>Data de Nascimento</p>
          <input type="date" />

          <p>CPF</p>
          <input type="text" />
         </div>
         <div className='div2-editar'>
           <p>Telefone</p>
           <input type="text" />
           <p>E-mail</p>
           <input type="email" />
           <p>Senha</p>
           <input type="text" />
         </div>
        </div>
        </div>

        {/* <Footer /> */}
    </div>
  )
}

export default PerfilVisualizar;