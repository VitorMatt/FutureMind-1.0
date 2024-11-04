import './CSS/SobreNos.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

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

        <div className='bolaMissao'>
          <img src="Bolinhas.png" className='bolinhas'/>
        </div>

      </div>

      <div className='conteudoo2'>
        <div className='descricaoFundacao'>
          <h1>Fundação:</h1>
          <p>A FutureMind é uma plataforma que oferece acesso acessível e de qualidade a sessões de psicanálise. Ela conecta indivíduos que buscam apoio psicológico a recém-formados 
             em psicologia, permitindo que esses profissionais em início de carreira ganham experiência prática enquanto cumprem os requisitos de estágio, sob supervisão de psicólogos 
             experientes.
          </p>
        </div>
        <img src="ArvoreS.svg" className='arvoreSobre'/>
          <div className='fotoNossa'>

          </div>
      </div>

     
        <div className='card1'>
          <img src="Star.svg"/>
          <p><strong>Qualidade</strong></p>
          <p>Garantir a maior qualidade possível de trabalho dos usuários</p>
        </div>

        <div className='card2'>
          <img src="garantia 1.svg"/>
          <p><strong>Confiança</strong></p>
          <p>Garantir a maior confiança possível entre os profissionais e pacientes.</p>
        </div>

        <div className='card3'>
          <img src="Heart.svg"/>
          <p><strong>Bem-Estar</strong></p>
          <p>Tentaremos sempre manter o maior bem-estar possível, tanto quanto saúde e comunicação.</p>
        </div>

        <div className='divSugestões'>

          <div className='imgDivSugestao'>
            <img src="logo.png"/>
          </div>

          <div className='dadosSugestoes'>
            <h1>Sugestão:</h1>
            <p>Ajude-nos a tornar sua experiência ainda melhor. Deixe sua sugestão!</p>
            <textarea id="expandingTextarea" placeholder="Digite aqui sua sugestão..."></textarea> 
            <button className='botaoSugestao'>Enviar</button>
          </div>
        </div>

        <Footer />

    </div>
  )
}

export default SobreNos