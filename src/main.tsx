import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootRoutes } from './router/Root.tsx';

const router = createBrowserRouter(rootRoutes());

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);