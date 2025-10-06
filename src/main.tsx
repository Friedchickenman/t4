import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/mainPage.tsx';
import AboutPage from './pages/aboutPage.tsx';
import Root from './Root.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);