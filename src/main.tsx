import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { rootRoutes } from './router/Root.tsx';

const routes = rootRoutes();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </BrowserRouter>
);
