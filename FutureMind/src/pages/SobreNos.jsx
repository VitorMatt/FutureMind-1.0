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
          <img src="Bolinhas.png"/>
      </div>

      <div className='conteudoo2'>
        <div className='descricaoFundacao'>
          <h1>Fundação:</h1>
          <p>
          A FutureMind é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados 
          em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos 
          experientes.
          </p>
        </div>
        <img src="ArvoreS.svg" className='arvoreSobre'/>
          <div className='fotoNossa'></div>
      </div>

     
        <div className='card1'>
          <img src="Star.svg"/>
          <p>Qualidade</p>
          <p>Garantir a maior qualidade possível de trabalho dos cuidadores e da empresa.</p>
        </div>

        <div className='card2'>
          <img src="garantia 1.svg"/>
          <p>Confiança</p>
          <p>Garantir a maior confiança possível entre os cuidadores com os responsáveis.</p>
        </div>

        <div className='card3'>
          <img src="Heart.svg"/>
          <p>Bem-Estar</p>
          <p>Tentaremos sempre manter o maior bem-estar possível, tanto quanto saúde e comunicação entre cuidadores e responsáveis.</p>
        </div>

      
    </div>
  )
}

export default SobreNos