import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import rootRouter from './router/Root.tsx';
import sidebarRouter from './router/sidebarRouter.tsx'; // sidebarRouter import 추가

const allRoutes = [...rootRouter(), ...sidebarRouter()]; // 두 라우터 배열을 합침

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {allRoutes}
    </Routes>
  </BrowserRouter>
);
