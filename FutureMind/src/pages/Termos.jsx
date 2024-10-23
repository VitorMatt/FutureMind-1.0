import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './CSS/Termos.css'

function Termos() {
  return (
      <div>
        <Navbar />
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

      <div className='conteudo'>
        <h1>Aceitação dos Termos</h1>
        {/* <div className='textinhoAceitação'>
          <p>Ao acessar e utilizar o site FutureMind, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com estes termos, pedimos que não utilize nosso site.</p>
          <p>Os Termos de Uso são aplicáveis a todos os usuários, visitantes e qualquer pessoa que acesse o conteúdo e serviços oferecidos pelo FutureMind. Reservamo-nos o direito de modificar estes termos a qualquer momento, e recomendamos que você os revise periodicamente. Seu uso contínuo do site após a publicação de alterações constitui aceitação das novas condições.</p> 
          <p>No FutureMind, nossa missão é proporcionar um espaço seguro e acolhedor para a terapia e o bem-estar emocional. Ao utilizar nossos serviços, você concorda em respeitar as diretrizes e políticas estabelecidas, buscando sempre um ambiente positivo e construtivo.</p>
        </div> */}
      </div>

      aaaaaaaaaaaa

    </div>
  )
}

export default Termos