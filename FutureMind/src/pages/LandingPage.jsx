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
                 <p>Como funciona a terapia online</p>
                
            </div>

            <div className='text-flex'>
                  <p>A terapia online é uma forma prática de cuidar da sua saúde mental. Você conhece os profissionais na plataforma, agenda sua consulta no melhor horário e realiza sessões por videochamada com segurança e conforto, sem precisar sair de casa. Uma solução acessível para o seu bem-estar!</p>
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
                <img src="image2.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Carlos, 28 anos:</h1>
                </div>
                <div className="relato">
                  <p>No início, tinha dúvidas sobre a eficácia da terapia online, mas minha experiência foi surpreendente. Meu terapeuta criou um ambiente seguro e acolhedor, onde pude falar abertamente sobre minhas ansiedades. Hoje, me sinto mais confiante seguro e com um espaço aolhedor de conhecimento. </p>
                </div>
              </div>
            </div>

            <div className="relatos">
              <div className="img-perfil">
                <img src="image3.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Ana, 45 anos:</h1>
                </div>
                <div className="relato">
                  <p>Ana, 45 anos: "A terapia online mudou minha vida! A abordagem prática e as ferramentas que aprendi nas sessões me ajudaram a lidar melhor com o estresse e cansaço do dia a dia, Alem do tempo otimizado para cuidar de mim. Sou grata por ter encontrado esse espaço de apoio e compreensão." </p>
                </div>
              </div>
            </div>

            <div className="relatos">
              <div className="img-perfil">
                <img src="image4.svg" alt="" />
              </div>
              <div className="text-perfil">
                <div className="nome-idade-perfil">
                  <h1>Fernando, 37 anos:</h1>
                </div>
                <div className="relato">
                  <p> Fazer terapia online foi uma das melhores decisões da minha vida. O conforto de estar em casa e a conexão que estabeleci com minha terapeuta foram fundamentais para o meu processo de cura. Hoje, me sinto mais leve e em paz comigo mesmo. Indico e saliento a grande doferença que faz a terapia!</p>
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
