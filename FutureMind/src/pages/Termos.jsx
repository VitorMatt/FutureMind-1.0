import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './CSS/Termos.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Termos() {
  return (
      <div className='body-termos'>
        <Navbar />
        <ScrollToTop />

        <div className='divBotoes'>
          <Link to = '/politica'className='botaodecisao'>Política de Privacidade</Link>
          <Link to = '/termos'className='botaodecisaodois'>Termos de uso</Link>
        </div>
        
        <div className='introducao'>
          <div className='T_titulo'>
              <h1>Termos de uso da FutureMind</h1>
          </div>
          <div className='textinho'>
              <div><p> Na Future Mind, a sua privacidade é nossa prioridade.</p></div>
              

            <div>
              <p> Comprometemo-nos a proteger suas informações pessoais e a garantir que você tenha uma experiência segura e confiável em nossa plataforma de terapia online.</p>
              <img src="bolona.png" className='boolinha'/>
            </div>


              <div> 
                <p> Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações, além de esclarecer seus direitos em relação a esses dados.
                    Ao utilizar nossos serviços, você concorda com as práticas aqui descritas, e estamos aqui para garantir que sua jornada rumo ao bem-estar mental seja transparente 
                    e respeitosa.
                </p>
                <img src="bolona.png" className='bolinha3' />
              </div> 
            
          </div>
        </div>

        <div className='bolona_termos'>
          <img src="bolona2.png"/>
        </div>

        <div>
          <img src="bolona.png" className='bolinha2'/>
        </div>

        <div>
          <img src="bolonaEsquerda.png" className='bolonaes'/>
        </div>

      <div className='accordion-container'>
        <Accordion className='container_ac'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            
          >
            <AccordionDetails  className='titulo_ac_um'>
            Aceitação dos Termos
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>
            <p>Ao acessar e utilizar o site FutureMind, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com estes termos, pedimos que não utilize nosso site.</p>
            <p>Os Termos de Uso são aplicáveis a todos os usuários, visitantes e qualquer pessoa que acesse o conteúdo e serviços oferecidos pelo FutureMind. Reservamo-nos o direito de modificar estes termos a qualquer momento, e recomendamos que você os revise periodicamente. Seu uso contínuo do site após a publicação de alterações constitui aceitação das novas condições.</p> 
            <p>No FutureMind, nossa missão é proporcionar um espaço seguro e acolhedor para a terapia e o bem-estar emocional. Ao utilizar nossos serviços, você concorda em respeitar as diretrizes e políticas estabelecidas, buscando sempre um ambiente positivo e construtivo.</p>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='accordion-container'>
        <Accordion className='container_ac'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
           
            
          >
            <AccordionDetails  className='titulo_ac_um'>
            Direitos Autorais
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>
            <p>© 2024 FutureMind. Todos os direitos reservados.</p>
            <p>O conteúdo deste site, incluindo textos, imagens, gráficos, logotipos e materiais relacionados, é protegido por leis de direitos autorais e propriedade intelectual. Nenhuma parte deste site pode ser reproduzida, distribuída, modificada ou utilizada de qualquer forma sem a autorização prévia por escrito da FutureMind.</p>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='accordion-container'>
        <Accordion className='container_ac'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            
          >
            <AccordionDetails  className='titulo_ac_um'>
            Uso Permitido
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>
            <p>Ao utilizar o site FutureMind, você concorda em fazer uso responsável e ético de nossos serviços e conteúdos. O uso permitido inclui:</p>

            <p>Acesso aos Conteúdos: Você pode acessar, visualizar e interagir com os materiais disponibilizados no site, como artigos, vídeos e recursos relacionados à terapia e ao bem-estar.
               Compartilhamento de Experiências: Você é encorajado a compartilhar suas experiências e feedback, desde que faça isso de maneira respeitosa e construtiva, contribuindo para um ambiente acolhedor.
               Criação de Conta: Caso decida criar uma conta, você deve fornecer informações precisas e atualizadas, mantendo a confidencialidade de sua senha e sendo responsável por todas as atividades realizadas em sua conta.
            </p>

            <p>Proibições: É estritamente proibido:</p>

            <p>
              <ul>
                <li>Utilizar o site para fins ilegais ou não autorizados.</li>
                <li>Compartilhar informações falsas, enganosas ou prejudiciais.</li>
                <li>Realizar atividades que possam comprometer a segurança do site ou a experiência de outros usuários, como assédio, discriminação ou spam.</li>
              </ul>
            </p>

            <p>Ao seguir estas diretrizes, você ajuda a manter um ambiente seguro e positivo para todos os usuários do FutureMind. Agradecemos sua colaboração e desejamos uma experiência enriquecedora em sua jornada de autoconhecimento e crescimento pessoal!</p>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='accordion-container'>
        <Accordion className='container_ac'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            
          >
            <AccordionDetails  className='titulo_ac_um'>
            Contato
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>

            <p>Estamos aqui para ajudar você! Se você tiver dúvidas, sugestões ou precisar de mais informações sobre nossos serviços, 
              não hesite em entrar em contato conosco. A sua experiência é importante para nós, e queremos garantir que você tenha todo o apoio 
              necessário em sua jornada de autoconhecimento e bem-estar.
            </p>

            <p>Formas de Contato:</p>

            <p>
              <ul>
                <li>E-mail: contato@futuremind.com</li>
                <li>Telefone: (xx)xxxx-xxxx</li>
              </ul>
            </p>

            <p>Agradecemos por escolher o FutureMind. Estamos ansiosos para ouvir de você e apoiá-lo em sua jornada de terapia!</p>
          </AccordionDetails>
        </Accordion>
      </div>

      <Footer />
 
    </div>
  )
}

export default Termos