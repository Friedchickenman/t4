import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import rootRouter from './router/Root.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {rootRouter()}
    </Routes>
  </BrowserRouter>
);
