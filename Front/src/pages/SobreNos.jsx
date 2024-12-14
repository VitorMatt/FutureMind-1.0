// Importação de módulos e estilos
import './CSS/SobreNos.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Componente para rolar a página ao topo ao mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SobreNos() {
  // Estado para armazenar os profissionais
  const [profissionais, setProfissionais] = useState([]);

  // Função para buscar dados dos profissionais
  const fetchProfissionais = async () => {
    const response = await fetch('http://localhost:3000/cadastro');    
    const data = await response.json();
    setProfissionais(data);
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    fetchProfissionais();
  }, []);

  // Estado e função para lidar com sugestões
  const [sugestao, setSugestao] = useState('');

  const handleSugestao = async () => {
    setSugestao('');
    try {
      const response = await fetch('http://localhost:3000/sugestoes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ sugestao: sugestao }),
      });

      if (response.ok) {
        console.log('Post com sucesso');
      }
    } catch (err) {
      console.log('Erro', err.message);
    }
  };

  return (
    <div className='sobreNos-container'>
      {/* Navbar e scroll ao topo */}
      <NavBar />
      <ScrollToTop />

      {/* Seção de missão */}
      <div className='conteudoo'>
        <img src="Terapiaaa.svg" className='img' alt='Terapia' />

        <div className='descricaoMissao'>
          <h1>Missão:</h1>
          <p>
            A FutureMind é uma plataforma inovadora que oferece acesso acessível e de qualidade a sessões de psicanálise. Seu objetivo é conectar indivíduos que buscam apoio psicológico a recém-formados em psicologia, proporcionando uma experiência enriquecedora para ambos os lados. Dessa forma, os profissionais em início de carreira têm a oportunidade de ganhar experiência prática, enquanto os clientes se beneficiam de um serviço acessível e humanizado, contribuindo para o bem-estar emocional e a construção de uma sociedade mais saudável.
          </p>
        </div>

        <div className='bolaMissao'>
          <img src="Bolinhas.png" className='bolinhas' alt='Decoração' />
        </div>
      </div>

      {/* Seção de fundação */}
      <div className='conteudoo2'>
        <div className='descricaoFundacao'>
          <h1>Fundação:</h1>
          <p>
            A FutureMind é uma empresa inovadora no campo da saúde mental, especializada em oferecer terapia online de alta qualidade. Fundada por um grupo de profissionais experientes da área psicológica e de tecnologia, a missão da FutureMind é tornar o acesso à terapia mais democrático, eficiente e acessível para pessoas de diferentes localidades e realidades. Acreditamos que a saúde mental é fundamental para o bem-estar e a qualidade de vida, e, por isso, criamos uma plataforma intuitiva e segura para proporcionar suporte emocional.
            Com um time de terapeutas altamente capacitados e uma abordagem personalizada, buscamos entender as necessidades individuais de cada cliente, oferecendo sessões de terapia adaptadas às suas particularidades. A FutureMind utiliza tecnologias de ponta para garantir a segurança e a privacidade das informações, respeitando os mais rigorosos padrões éticos da profissão.
          </p>
        </div>
        <img src="Arvoreess.svg" className='arvoreSobre' alt='Decoração' />
        <div className='fotoNossa'>
          <img src="IMG EQUPIE 1.svg" alt='Equipe FutureMind' />
        </div>
      </div>

      {/* Cartões de valores */}
      <div className='div-cards'>
        <div className='card1'>
          <img src="Star.svg" alt='Qualidade' />
          <p><strong>Qualidade</strong></p>
          <p>Garantir a maior qualidade possível de trabalho dos usuários</p>
        </div>

        <div className='card2'>
          <img src="garantia 1.svg" alt='Confiança' />
          <p><strong>Confiança</strong></p>
          <p>Garantir a maior confiança possível entre os profissionais e pacientes.</p>
        </div>

        <div className='card3'>
          <img src="Heart.svg" alt='Bem-Estar' />
          <p><strong>Bem-Estar</strong></p>
          <p>Tentaremos sempre manter o maior bem-estar possível, tanto quanto saúde e comunicação.</p>
        </div>
      </div>

      {/* Seção de sugestões */}
      <div className='container-sugestoes'>
        <div className='divSugestões'>
          <div className='imgDivSugestao'>
            <img src="logo.png" alt='Logo FutureMind' />
          </div>

          <div className='dadosSugestoes'> 
            <h1>Sugestão:</h1>
            <p>Ajude-nos a tornar sua experiência ainda melhor. Deixe sua sugestão!</p>
            <textarea 
              id="expandingTextarea" 
              placeholder="Digite aqui sua sugestão..." 
              value={sugestao} 
              onChange={(e) => setSugestao(e.target.value)}
            ></textarea> 
            <button className='botaoSugestao' onClick={handleSugestao}>Enviar</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SobreNos;
