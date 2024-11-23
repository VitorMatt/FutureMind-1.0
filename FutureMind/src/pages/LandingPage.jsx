import './CSS/LandingPage.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { MyCarousel } from '../components/MyCarousel'

function LandingPage() { 
  return (

    <div className='landingPage-container'>
      <Navbar />
      
      <div className='container-maior'>

      <div className="info">
           <h1 className="titulo">Um futuro para sua mente</h1>
           <div className="subtitulo"><p>
            Moldamos nosso próprio futuro, quando transformamos nossa mente.
            </p>
           <p>Vamos cultivar esse futuro promissor juntos?</p>
           </div>
           <Link to='/'>
           <button className="btn">Comece Já</button>
           </Link>
        </div>

        <div className="img2">
          <MyCarousel className='carousel-2' />
           <img className='computer-inicio' src='computer2.svg' />

        </div>
      </div>
        <div className='back'>
          <div className='imgPhone'>
            <img src='imgtelefone.png' className='phoneImage' />
          </div>

          <div className='conteudo'>
          <div className='titulo-back'>
          <h1>Por quê seus colaboradores preferem a FutureMind?</h1>
          </div>

          <div className='texto-um'>
          <p>Um aplicativo de terapia online simplifica a busca por apoio emocional, permitindo agendar sessões, escolher profissionais e acessar recursos de bem-estar com apenas alguns toques. Sua interface intuitiva torna o uso fácil e acessível para todas as idades.</p>
          <img src='circuloimg.png' className='circuloimg' />
          </div>

          <div className='texto-dois'>
          <p>A flexibilidade de realizar consultas de qualquer lugar elimina barreiras geográficas, ampliando o acesso à terapia. Lembretes automáticos ajudam a manter a rotina, e ferramentas integradas, como exercícios de mindfulness e diário emocional, potencializam a eficácia do tratamento.</p>
          </div>

          <div className='conhecer-gente'>
          <button className='conhecer-button'>
            Conhecer a gente
          </button>
          </div>
          </div>
        </div>
        
        <div className='grande'>

          <div className='esquerdo'>

            <div className='como-funciona'>
                 <p>COMO FUNCIONA A TERAPIA ONLINE</p>
                
            </div>

            <div className='text-flex'>
                  <p>A flexibilidade de realizar consultas de qualquer lugar elimina barreiras geográficas, ampliando o acesso à terapia. Lembretes automáticos ajudam a manter a rotina, e ferramentas integradas, como exercícios de atenção plena, potencializam a eficácia do tratamento.</p>
            </div>

          </div>
          <div className='imagem-direito'> 
                <img className='imagemterapia' src='imagemterapia.png' />
          </div>

        </div> 

        <div className="div-total">
          
          <div className="btn-text">
              
          {/* <img src="ArvoreS.svg" className='arvoreLandig'/> */}

            <div className="textFinal">
            <p>Quando cuidamos do nosso interior, nutrimos nossa mente, nos preparando para florescer. O autoconhecimento é o solo fértil que permite construir um futuro mais saudável e equilibrado.</p>
            </div>
            
            <div className="ultimobtn">
              <button>
                Colabore com a gente
              </button>
            </div>
          
          
          </div>

         
          <div className="arvoreLanding">
            <img src="ArvoreLanding.png" alt="" />
          </div>
          <div className="relatostotal">
            
            <div className="relatos">
              <div className="img-perfil">
                <img src="image.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Clarice, 54 anos:</h1>
                </div>
                <div className="relato">
                  <p>Comecei a terapia online há seis meses e não poderia estar mais feliz com os resultados. A flexibilidade de fazer as sessões de casa me ajudou a abrir o coração e explorar questões que me incomodavam há anos. Sinto que estou finalmente no caminho certo para o autoconhecimento!"</p>
                </div>
              </div>
            </div>

            <div className="relatos">
              <div className="img-perfil">
                <img src="image.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Clarice, 54 anos:</h1>
                </div>
                <div className="relato">
                  <p>Comecei a terapia online há seis meses e não poderia estar mais feliz com os resultados. A flexibilidade de fazer as sessões de casa me ajudou a abrir o coração e explorar questões que me incomodavam há anos. Sinto que estou finalmente no caminho certo para o autoconhecimento!"</p>
                </div>
              </div>
            </div>

            <div className="relatos">
              <div className="img-perfil">
                <img src="image.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Clarice, 54 anos:</h1>
                </div>
                <div className="relato">
                  <p>Comecei a terapia online há seis meses e não poderia estar mais feliz com os resultados. A flexibilidade de fazer as sessões de casa me ajudou a abrir o coração e explorar questões que me incomodavam há anos. Sinto que estou finalmente no caminho certo para o autoconhecimento!"</p>
                </div>
              </div>
            </div>

            <div className="relatos">
              <div className="img-perfil">
                <img src="image.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Clarice, 54 anos:</h1>
                </div>
                <div className="relato">
                  <p>Comecei a terapia online há seis meses e não poderia estar mais feliz com os resultados. A flexibilidade de fazer as sessões de casa me ajudou a abrir o coração e explorar questões que me incomodavam há anos. Sinto que estou finalmente no caminho certo para o autoconhecimento!"</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        
        <Footer />
         </div>

    

    
  )
}

export default LandingPage
