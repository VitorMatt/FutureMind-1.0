
import Navbar from "../components/Navbar"
import './CSS/Adm.css'

function Adm() {

      const Profissionais = 
      
      [

        {nome: 'Renato Garcia', instagram: '@RenatoGarcia' , idade: 36, descrição: 'Ola eu sou o Renato', atende: 'Adolescentes, Idosos, Crianças.', especialização: 'Bullying, Autoaceitação'},
        {nome: 'Pedro Henrique', instagram: '@PedroHenrique' , idade: 27, descrição: 'Ola eu sou o Pedro', atende: 'Adolesentes, PCDs, Idosos.', especialização: 'Depressão, Adolescência'},
        {nome: 'Luiza Souza', instagram: '@LuizaSousa' , idade: 23, descrição: 'Ola eu sou a Luiza', atende: 'Pré-Adolescentes, Crianças, Adolecentes.', especialização: 'Angústia, Relacionamentos'},
        
        

      ]

  return (
    <div>
      <Navbar/>
       <h1 className="h1_Profissionais_adm">Profissionais:</h1>
       <div className="container_padrao_adm">{

         Profissionais.map((p, index) => (

         <div 
          key={index}
          className="Div_profissionais_adm"
         >
          <div className="div_um_interna_profissional">
            <img src="Foto_perfil.svg" alt="" />
            <p>{p.instagram}</p>
            <button>Deletar</button>
            <button>Editar</button>
          </div>
          <div className="div_dois_interna_profissional">
             <h1>{p.nome}</h1> 
             <p>Eu atendo...</p>
             <p>{p.atende}</p>
             <p>Especialidade(s):</p>
             <p>{p.especialização}</p>
          </div>

         </div>

         ))
        }
       </div>
       <h1 className="h1_Paciente_adm">Paciente:</h1> 
    </div>
  )
}

export default Adm
