import './CSS/LandingPage.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { MyCarousel } from '../components/MyCarousel';

function LandingPage() { 
  return (
    <div className="landingPage-container">
      {/* Navbar Section */}
      <Navbar />
      
      <div className="container-maior">
        
        {/* Main Information Section */}
        <div className="info">
          <h1 className="titulo">Um futuro para sua mente</h1>
          <div className="subtitulo">
            <p>Moldamos nosso próprio futuro, quando transformamos nossa mente.</p>
            <p>Vamos cultivar esse futuro promissor juntos?</p>
          </div>
          <Link to="/cadastro">
            <button className="btn">Comece Já</button>
          </Link>
        </div>

        {/* Carousel and Image Section */}
        <div className="img2">
          <MyCarousel className="carousel-2" />
          <img className="computer-inicio" src="computer2.svg" alt="computer" />
        </div>
      </div>

      {/* Features Section */}
      <div className="back">
        <div className="imgPhone">
          <img src="imgtelefone.png" className="phoneImage" alt="phone" />
        </div>

        <div className="conteudo">
          <div className="titulo-back">
            <h1>Por quê seus colaboradores preferem a FutureMind?</h1>
          </div>

          <div className="texto-um">
            <p>
              Um aplicativo de terapia online simplifica a busca por apoio emocional, permitindo agendar sessões, 
              escolher profissionais e acessar recursos de bem-estar com apenas alguns toques. Sua interface intuitiva 
              torna o uso fácil e acessível para todas as idades.
            </p>
          </div>
            <img src="BolinhaLade.svg" className="circuloimg" alt="circle" />

          <div className="texto-dois">
            <p>
              A flexibilidade de realizar consultas de qualquer lugar elimina barreiras geográficas, ampliando o acesso 
              à terapia. Lembretes automáticos ajudam a manter a rotina, e ferramentas integradas, como exercícios de 
              mindfulness e diário emocional, potencializam a eficácia do tratamento.
            </p>
          </div>

          <div className="conhecer-gente">
            <Link to= "/sobrenos"><button className="conhecer-button">Conhecer a gente</button></Link>
          </div>
        </div>
      </div>

      {/* How Therapy Works Section */}
      <div className="grande">
        <div className="esquerdo">
          <div className="como-funciona">
            <p>Como funciona a terapia online</p>
          </div>

          <div className="text-flex">
            <p>
              A terapia online é uma forma prática de cuidar da sua saúde mental. Você conhece os profissionais na 
              plataforma, agenda sua consulta no melhor horário e realiza sessões por videochamada com segurança e 
              conforto, sem precisar sair de casa. Uma solução acessível para o seu bem-estar!
            </p>
          </div>
        </div>

        <div className="imagem-direito">
          <img className="imagemterapia" src="imagemterapia.png" alt="therapy" />
        </div>
      </div>


      {/* Final Message Section */}
      <div className='container-total'>
      <div className="div-total">
        <div className="btn-text">
          <div className="textFinal">
            <p>
              Quando cuidamos do nosso interior, nutrimos nossa mente, nos preparando para florescer. O 
              autoconhecimento é o solo fértil que permite construir um futuro mais saudável e equilibrado.
            </p>
          </div>

          <div className="ultimobtn">
            <Link to= "/sobrenos"><button>Colabore com a gente</button></Link>
          </div>
        </div>

        <div className="arvoreLanding">
          <img src="ArvoreRelato.svg" alt="tree" />
        </div>

        {/* Testimonials Section */}
        <div className="relatostotal">
          <div className="relatos">
            <div className="img-perfil">
              <img src="image.svg" alt="profile 1" />
            </div>
            <div className="text-perfil">
              <div className="nome-idade-perfil">
                <h1>Clarice, 54 anos</h1>
              </div>
              <div className="relato">
                <p>
                  Comecei a terapia online há seis meses e não poderia estar mais feliz com os resultados. A flexibilidade 
                  de fazer as sessões de casa me ajudou a abrir o coração e explorar questões que me incomodavam há anos. 
                  Sinto que estou finalmente no caminho certo para o autoconhecimento!
                </p>
              </div>
            </div>
          </div>

          <div className="relatos">
            <div className="img-perfil">
              <img src="image2.svg" alt="profile 2" />
            </div>
            <div className="text-perfil">
              <div className="nome-idade-perfil">
                <h1>Carlos, 28 anos</h1>
              </div>
              <div className="relato">
                <p>
                  No início, tinha dúvidas sobre a eficácia da terapia online, mas minha experiência foi incrível. 
                  Meu terapeuta criou um ambiente seguro e acolhedor, onde pude falar abertamente sobre minhas ansiedades. 
                  Hoje, me sinto mais confiante e seguro para ser eu mesmo.
                </p>
              </div>
            </div>
          </div>

          <div className="relatos">
            <div className="img-perfil">
              <img src="image3.svg" alt="profile 3" />
            </div>
            <div className="text-perfil">
              <div className="nome-idade-perfil">
                <h1>Ana, 45 anos</h1>
              </div>
              <div className="relato">
                <p>
                  A terapia online mudou minha vida! A abordagem prática e as ferramentas que aprendi nas sessões 
                  me ajudaram a lidar melhor com o estresse e cansaço do dia a dia, além do tempo otimizado para cuidar de mim.
                  Sou grata por ter encontrado esse espaço de apoio e compreensão.
                </p>
              </div>
            </div>
          </div>

          <div className="relatos">
            <div className="img-perfil">
              <img src="image4.svg" alt="profile 4" />
            </div>
            <div className="text-perfil">
              <div className="nome-idade-perfil">
                <h1>Fernando, 37 anos</h1>
              </div>
              <div className="relato">
                <p>
                  Fazer terapia online foi uma das melhores decisões da minha vida. O conforto de estar em casa e a 
                  conexão com minha terapeuta foram fundamentais para o meu processo de cura. Hoje, me sinto mais leve e em 
                  paz comigo mesmo. Indico e saliento a grande diferença que faz a terapia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default LandingPage;
