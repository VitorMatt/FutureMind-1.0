import React, {useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CSS/PerfilVisualizar.css'

function PerfilVisualizar() {

  const [profissional, setProfissional] = useState(null);
  useEffect(() => {

    handleGet();
  }, []);

    const handleGet = async() => {

      const response = await fetch(`http://localhost:3000/profissional/:id`);

      if (response.ok) {

        const data = await response.json();
        setProfissional(data);
      }
    }
    // const profissional = 
   
  //  [
// 
  //     { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descrição: 'Oie,eu sou o João Miguel e sou um ótimo profissional na minha área.',}

  //  ]

  return (
    <div className='perfilVisu-container'>
      <Navbar />
           <div className='perfil-profissional'>
            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>
            
                <div>

                 <div className='div-foto-nome'>
                    <div className='foto-usuario'>
                        <img src={p.img} className='a-foto'/>
                    </div>
                    <div className='nick-usuario'>
                        <h1>{p.nome}</h1>
                        <p>{p.email}</p>
                    </div>
                 </div>
    
                 <div className='div-info'>
                    <div className='div-menor-info'>
                        <p>Eu atendo...</p>
                        <p>{p.Atendo_um}</p>
                        <p>{p.Atendo_dois}</p>
                        <p>{p.Atendo_tres}</p>
                    </div>
                    <div className='div-menor-info'>
                        <p>Especialidade(s):</p>
                        <p>{p.Especializacao_um}</p>
                        <p>{p.Especializacao_dois}</p>
                    </div>
                    <div className='descricao'>
                        <p>Descrição:</p>
                        <textarea readOnly maxLength="132">{p.descrição}</textarea>
                    </div>
                 </div>

    
                </div>
                )) 
            }
            </div>
            <div className='anotações-profissional'>
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
            </div>
           
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

        <Footer />
    </div>
  )
}

export default PerfilVisualizar;