import React, { lazy, Suspense } from 'react';
import CustomLayout from "../layouts/customLayout";

const Loading = <div>Loading...</div>;

const MainPage = lazy(() => import('../pages/mainPage'));
const AboutPage = lazy(() => import('../pages/aboutPage'));

export function rootRoutes() {
    return [
        {
            path: '/',
            element: <CustomLayout><Suspense fallback={Loading}><MainPage /></Suspense></CustomLayout>,
        },
        {
            path: '/about',
            element: <CustomLayout><Suspense fallback={Loading}><AboutPage /></Suspense></CustomLayout>,
        },
    ];
}
