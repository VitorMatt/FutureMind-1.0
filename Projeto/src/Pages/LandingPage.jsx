import './CSS/LandingPage.css';
import img from '../assets/img.png';
import NavBar from '../components/NavBar';

function LandingPage() {

    return(
        <>
        <NavBar />

    <div class="container">

        <div class="info">
           <h1 class="titulo">Um futuro para sua mente</h1>
           <p class="subtitulo">Moldamos nosso próprio futuro, quando transformamos nossa mente.
           Vamos cultivar esse futuro promissor juntos!</p>
           <button class="BOTAO">COMECE JÁ</button>
        </div>

        <div class="imagem">
           <img src={img} />
        </div>

    </div>
    </>
    );
};

export default LandingPage;