import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from '../components/ErrorElement'
import EscolhaCadastro from '../pages/EscolhaCadastro'
import Inicio from '../pages/Inicio'
import LandingPage from '../pages/LandingPage'
import SobreNos from '../pages/SobreNos'


const router = createBrowserRouter([{

    path: '/',
    element: <Inicio />,
    errorElement: <ErrorElement />,
},
{
    path: '/sobrenos',
    element: <SobreNos />
},
{
    path: '/cadastro',
    element: <EscolhaCadastro />
},
{
    path: '/landingpage',
    element: <LandingPage />
}])

export default router