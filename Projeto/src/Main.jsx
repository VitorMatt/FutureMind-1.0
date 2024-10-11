import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Home from './Pages/Home.jsx';
import App from './App.jsx';
<<<<<<< HEAD
import CadastroUm from './Pages/CadastroUm.jsx';
import CadastroPaciente from './Pages/CadastroPaciente.jsx';

=======
import SobreNos from './Pages/SobreNos.jsx';
>>>>>>> 8ca6deaaff2d45baf5aa6e260aa3c772ce544963

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