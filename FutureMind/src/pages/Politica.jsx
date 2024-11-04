import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import './CSS/Politica.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function politica() {
  return (
    <div className='body-politica'>
    <Navbar />
    
    <div className='divBotoes'>

        <Link to = '/politica' className ='botaodecisaoo'>Política de Privacidade</Link>
        <Link to = '/termos' className ='botaodecisaodoiss'>Termos de uso</Link>
        
      </div>
      
      <div className='introducao'>
        <div className='T_titulo'>
            <h1>Politica de Privacidade da FutureMind</h1>
        </div>
        <div className='textinho'>
            <div><p> Na Future Mind, a sua privacidade é nossa prioridade.</p></div>
            

           <div><p> Comprometemo-nos a proteger suas informações pessoais e a garantir que você tenha uma experiência segura e confiável em nossa plataforma de terapia online.</p>
           
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
            Direitos de Privacidade
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>

            <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento.
               Se desejar exercer esses direitos, entre em contato conosco.</p>

            <p>Formas de Contato:</p>

            <p>
              <ul>
                <li>E-mail: contato@futuremind.com</li>
                <li>Telefone: (xx)xxxx-xxxx</li>
              </ul>
            </p>

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
            Dados Coletados Pela FutureMind
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>

            <p>Os dados pessoais que coletamos são utilizados para:

                Fornecer e gerenciar nossos serviços de terapia.
                Personalizar sua experiência e enviar informações relevantes.
                Entrar em contato com você para agendamentos, confirmações e follow-ups.

                Melhorar nossos serviços e conteúdo.
            </p>

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
            Proteção dos Dados Pessoais
            </AccordionDetails>
        
          </AccordionSummary>
          <AccordionDetails className='textinhoAceitação'>

            <p>implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração ou divulgação.
               Somente pessoas autorizadas têm acesso a esses dados, e utilizamos tecnologia de criptografia para garantir sua segurança.
            </p>

          </AccordionDetails>
        </Accordion>
      </div>

      <h1 className='H1_recursos' >Quais Recursos Protegem seus Dados ?</h1>

      <div className='Container-recursos'>
        
        <div className='div_um_recursos'>

            <img src="identificacao.svg" />
          

          <h2>Identifição <br /> de Usuario</h2>
        </div>

        <div className='div_dois_recursos'>

         <div>
           <img src="seguranca.svg"  />
         </div>

         <h2>Segurança <br /> de dados</h2>
        </div>

        <div className='div_tres_recursos'>
          <div>
            <img src="icone_banco.svg" />
          </div>

          <h2>Banco <br /> de dados</h2>
        </div>

        <div className='div_quatro_recursos'>
          <div>
            <img src="icone_chaves.svg" />
          </div>

          <h2>Chaves/ <br /> Senhas</h2>
        </div>
        
      
      </div>
    </div>
  )
}

export default politica
