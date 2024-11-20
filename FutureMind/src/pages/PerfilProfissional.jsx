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

    const agenda = () => {


        const agendamentos = [
           
            {data: "2024-11-12", paciente: "thalles Lima",horario: "15:00"},
            {data: "2024-11-13", paciente: "Luciana Nuss", horario: "13:00" },
            {data: "2024-11-15", paciente: "Julia Silva Dias", horario: "14:30" },

        ]

        let handleProximaSemana = () => {

          const proximaSemana = new Date(dataAtual)
          setDataAtual(proximaSemana)
          setDiasUteis(obterDiasUteis(proximaSemana))

        }
      
        let  handleSemanaAnterior = () => {

          const semanaAnterior = new Date(dataAtual)
          semanaAnterior.setDate(semanaAnterior.getDate() - 7)
          setDataAtual(semanaAnterior)
          setDiasUteis(obterDiasUteis(semanaAnterior))

        };

    }  

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
                    {/* <div className='descricao'>
                        <p>Descrição:</p>
                        <p>João Miguel é um psicólogo carismático que utiliza terapia cognitivo-comportamental para ajudar seus clientes a crescerem emocionalmente.</p>
                    </div> */}
                    <div className='descricao'>
                        <p>Descrição:</p>
                        <textarea readOnly maxLength="132">{p.descrição}</textarea>
                    </div>
                 </div>
    
                 <div className='titulo-agenda'>
                    <h1>Agenda</h1>
                 </div>

                 <div className='agendinha'>
                 <div className='div-agenda'>
                  {/* <button onClick={"handleSemanaAnterior"}>{"<"}</button>
                    <span>{dataAtual.toLocaleDateString("pt-BR", {month: "long"})}</span>
                   <button onClick={"handleProximaSemana"}>{">"}</button>  */}
                 </div>
                 </div>
                </div>
                )) 
            }
            
          
        </div>

        {/* <div className='anotações-profissional'>

            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>

            <div className='input-button'>
                <div className='input-anotações'>
                    o
                </div>
                <div className='button-anotações'>
                    o
                </div>
            </div>

            <div className='div-anotações'>
                o
            </div>

        </div> */}

        {/* <div className='editar-perfil-profissional'>
            <div className='titulo-perfil'>
                <h1>Perfil Profissional</h1>
            </div>
            o
        </div> */}

      </div>
      
      <Footer />
    </div>
  )
}

export default PerfilProfissional
