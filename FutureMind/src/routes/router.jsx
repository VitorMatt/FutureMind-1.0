import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from '../components/ErrorElement'
import CadastroProfissional from '../pages/CadastroProfissional'
import EscolhaCadastro from '../pages/EscolhaCadastro'
import Inicio from '../pages/Inicio'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import SobreNos from '../pages/SobreNos'
import Termos from '../pages/Termos'
import CadastroFormado from '../components/CadastroFormado1'
import CadastroProfissionais1 from '../components/CadastroProfissionais1'
import CadastroProfissionalSelecao from '../components/cadastroProfissionalSelecao'
import { patch } from '@mui/material'


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
},
{
    path:'/login',
    element: <Login />
},
{
    path:'/cadastro-profissional',
    element: <CadastroProfissional />
},
{
    path: '/termos',
    element: <Termos />
},
{
    path:'/cadastroFormado1',
    element: <CadastroFormado />
},
{
    path:'/cadastroProfissionais1',
    element: <CadastroProfissionais1 />
},
{
    patch:'/cadastroSelecao',
    element:<CadastroProfissionalSelecao />
},

])


export default router