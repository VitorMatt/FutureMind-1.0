import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CSS/PerfilProfissional.css'


function PerfilProfissional() {

   const profissional = 
   
   [

      { img: 'renato.png' , nome: 'Joao Miguel', email: 'joaoMiguel@gmail.com', Atendo_um: 'Jovens', Atendo_dois: 'Adultos ', Atendo_tres: 'Casais ', Especializacao_um:'Bullying', Especializacao_dois: 'Autoaceitação', descrição: 'Oie,eu sou o João Miguel e sou um ótimo profissional na minha área.',}

   ]

    const obterDiasUteis = (dataInicio) => {

       const dias = []
       const atual = new Date(dataInicio)

       const diaDaSemana = atual.getDay()
       const deslocamento = diaDaSemana === 0 ? -6 : 1 - diaDaSemana 
          
       atual.setDate(atual.getDate() + deslocamento)

       for(let i = 0; i < 5; i++){

         dias.push(new Date(atual))
         atual.setDate(atual.getDate() + 1)

       }

       return dias;
    };

        const [dataAtual, setDataAtual] = useState(new Date())
        const [diasUteis, setDiasUteis] = useState(obterDiasUteis(new Date()))
        
        const [agendamentos, setAgendamentos] = useState([
          { data: "2024-11-12", paciente: "Thalles Lima", horario: "15:00" },
          { data: "2024-11-12", paciente: "Luciana Nuss", horario: "17:30" },
          { data: "2024-11-13", paciente: "Julia Silva Dias", horario: "14:30" },
          { data: "2024-11-25", paciente: "Mateus da Silva", horario: "16:00" },
       ]);

        function handleProximaSemana()  {

          const proximaSemana = new Date(dataAtual)
          proximaSemana.setDate(proximaSemana.getDate() + 7)
          setDataAtual(proximaSemana)
          setDiasUteis(obterDiasUteis(proximaSemana))

        }
      
        function handleSemanaAnterior(){

          const semanaAnterior = new Date(dataAtual)
          semanaAnterior.setDate(semanaAnterior.getDate() - 7)
          setDataAtual(semanaAnterior)
          setDiasUteis(obterDiasUteis(semanaAnterior))

        }

        const handleExcluirAgendamento = (data, horario) => {
          setAgendamentos((prevAgendamentos) => 
             prevAgendamentos.filter(
                (agendamento) => !(agendamento.data === data && agendamento.horario === horario)
             )
          );
       };

    

  return (
    <div className='perfilPro-container'>
      <Navbar />
      
      <div className='todas-divs'>

        <div className='perfil-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>
            {

                profissional.map((p,index) => (

                <div key={index}>

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
    
                 <div className='titulo-agenda'>
                    <h1>Agenda</h1>
                 </div>
                </div>
                )) 
            }
          <div className='container-agendamento'>
              <button onClick={handleSemanaAnterior} className="button_voltar"><img src="angle-left-solid.svg" alt="" /></button> 
           <div className='container-menor-ag'>
            <span className='mes-ano'>{dataAtual.toLocaleDateString ("pt-BR", {month: "long", year: "numeric"})}</span>
           <div className='dias_semana'>
             {
                diasUteis.map((d,index) => {

                  const dia_string = d.toISOString().split('T')[0];
                  const agendamento = agendamentos.find((ag) => ag.data === dia_string)
                  
                  return (

                    <div key={dia_string} className="div_informações_ag">

                     <div className='semana'>
                      <div className='cabeçalho'>
                        {d.toLocaleDateString("pt-BR", { weekday: "long" })} - {d.getDate()}
                      </div>
                     </div>
                      {agendamento ? (

                      <div className='itens_ag'>
                        <div className='os-itens'>
                          <p>{agendamento.paciente}</p>
                          <p>Data: {agendamento.data}</p>
                          <p>Horário: {agendamento.horario}</p>
                          <div className='buttons-itens'>
                            <button className='cancelar'>Cancelar</button>
                            <button className='check' onClick={() => handleExcluirAgendamento(agendamento.data, agendamento.horario, agendamento.paciente)}>
                             <img src="check-solid (1).svg" alt="" />
                            </button>
                          </div>
                        </div>
                      </div>

                      ) : (

                        <div className='mensagem_s'>Sem agendamento  (s)</div>
                        
                      )}
                    </div>
                  )
                }) 
             }
           </div>
           </div>
           <button onClick={handleProximaSemana}  className="button_passar"><img src="angle-right-solid.svg" alt=""/></button>
          </div>
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

      </div>
      
      <Footer />
    </div>
  )
}

export default PerfilProfissional
