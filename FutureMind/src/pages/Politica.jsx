import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function politica() {
  return (
    <div>
    <Navbar />
    
    <div className='divBotoes'>

        <Link to = '/politica' className ='botaodecisao'>Política de Privacidade</Link>
        <Link to = '/termos' className ='botaodecisaodois'>Termos de uso</Link>
        
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

      <div className='conteudo'>
        <h1>Direitos de Privacidade</h1>
        <div className='textinhoAceitação'>
          {/* <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Se desejar exercer esses direitos, entre em contato conosco.</p> */}
        </div>
      </div>

      
    </div>
  )
}

export default politica
