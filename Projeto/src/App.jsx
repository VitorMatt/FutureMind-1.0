import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Jsx from './Jsx.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jsx />
  </StrictMode>,
);
