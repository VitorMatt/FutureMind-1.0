import './CSS/LandingPage.css';
import img from '../assets/image.png';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

function LandingPage() {

    return(
        <>
        <NavBar />
       <div className="container">

        <div className="info">
           <h1 className="titulo">Um futuro para sua mente</h1>
           <p className="subtitulo">Moldamos nosso próprio futuro, quando transformamos nossa mente.
           Vamos cultivar esse futuro promissor juntos?</p>
           <Link to='/'>
           <button className="btn">Comece Já</button>
           </Link>
        </div>

        <div className="img">
           <img src={img} />
        </div>

    </div>
    </>
    );
};

export default LandingPage;