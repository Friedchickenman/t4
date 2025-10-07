import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout'; // MainLayout import 추가

const Loading = <div>Loading................</div>;

const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));

export default function rootRouter() {
  return [
    // MainLayout으로 Main 페이지를 감싸줌
    <Route 
      key="/" 
      path={'/'} 
      element={
        <MainLayout>
          <Suspense fallback={Loading}><Main/></Suspense>
        </MainLayout>
      } 
    />,
    <Route 
      key="/about" 
      path={'/about'} 
      element={<Suspense fallback={Loading}><About/></Suspense>} 
    />,
  ];
}
