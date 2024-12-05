import './CSS/SobreNos.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
function SobreNos() {

const [profissionais, setProfissionais] = useState([]);

const fetchProfissionais = async () => {
  const response = await fetch('http://localhost:3000/cadastro');
  const data = await response.json();
  setProfissionais(data);
};

useEffect(() => {

  fetchProfissionais();
}, []);

// const abc = async () => {

//   const response = await fetch('/cadastro', {

//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.parse(result.rows)
//   })

//   if (!response.ok) {
//     const errorData = await response.json();
//     alert('Erro no login: ' + errorData.message);
// }
// };


  const [sugestao, setSugestao] = useState('');

  const handleSugestao = async() => {

    setSugestao('');
    try {

      const response = await fetch('http://localhost:3000/sugestoes', {

        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({sugestao: sugestao})
      });

      if (response.ok) {

        console.log('Post com sucesso');
      }
    } catch (err) {

      console.log('Erro', err.message);
    }
  }

  return (
    <div className='sobreNos-container'>
      <NavBar />
      <ScrollToTop />

      <div className='conteudoo'>
        <img src="Design sem nome (1) 1.svg" className='img'/>

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
          <p>A FutureMind é uma empresa inovadora no campo da saúde mental, especializada em oferecer terapia online de alta qualidade. Fundada por um grupo de profissionais experientes da área psicológica e de tecnologia, a missão da FutureMind é tornar o acesso à terapia mais democrático, eficiente e acessível para pessoas de diferentes localidades e realidades. Acreditamos que a saúde mental é fundamental para o bem-estar e a qualidade de vida, e, por isso, criamos uma plataforma intuitiva e segura para proporcionar suporte emocional.

Com um time de terapeutas altamente capacitados e uma abordagem personalizada, buscamos entender as necessidades individuais de cada cliente, oferecendo sessões de terapia adaptadas às suas particularidades. A FutureMind utiliza tecnologias de ponta para garantir a segurança e a privacidade das informações, respeitando os mais rigorosos padrões éticos da profissão.
          </p>
        </div>
        <img src="ArvoreS.svg" className='arvoreSobre'/>
          <div className='fotoNossa'>
            <img src="IMG EQUPIE 1.svg"/>
          </div>
      </div>

      <div className='div-cards'>
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
      </div>

        <div className='divSugestões'>

          <div className='imgDivSugestao'>
            <img src="logo.png"/>
          </div>

          <div className='dadosSugestoes'>
            <h1>Sugestão:</h1>
            <p>Ajude-nos a tornar sua experiência ainda melhor. Deixe sua sugestão!</p>
            <textarea id="expandingTextarea" placeholder="Digite aqui sua sugestão..." value={sugestao} onChange={(e) => { setSugestao(e.target.value) }}></textarea> 
            <button className='botaoSugestao' onClick={handleSugestao}>Enviar</button>
          </div>
        </div>

        <Footer />

    </div>
  )
}

export default SobreNos