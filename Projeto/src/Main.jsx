import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Home from './Pages/Home.jsx';
import App from './App.jsx';
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
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);