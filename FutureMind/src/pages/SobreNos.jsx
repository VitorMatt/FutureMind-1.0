import './CSS/SobreNos.css'
import NavBar from '../components/Navbar'

function SobreNos() {
  return (
    <div className='sobreNos-container'>
      <NavBar />

      <div className='conteudoo'>
        <img src="img.png" className='img'/>

        <div className='descricaoMissao'>
          <h1>Missão:</h1>
          <p>A FutureMind é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados 
             em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos
             experientes.
          </p>
        </div>
      </div>

      <img src="" alt="" />

    </div>
  )
}

export default SobreNos