import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Home from './Pages/Home.jsx';
import App from './App.jsx';
import CadastroUm from './Pages/CadastroUm.jsx';
import CadastroPaciente from './Pages/CadastroPaciente.jsx';
import SobreNos from './Pages/SobreNos.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/landingpage',
        element: <LandingPage />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobrenos',
        element: <SobreNos />
      }
      ,{
        path:'/CadastroUm',
        element: <CadastroUm />,
      }
      ,{
        path:'/CadastroPaciente',
        element: <CadastroPaciente />
      }
      
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);