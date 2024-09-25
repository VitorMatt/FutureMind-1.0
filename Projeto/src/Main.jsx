import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.jsx';
import Home from './Pages/Home.jsx';
import App from './App.jsx';

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
        path: '/Home',
        element: <Home />
      }
  ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);