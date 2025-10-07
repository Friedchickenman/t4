import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import TodoIndexPage from "../pages/todo/indexPage.tsx";

const Loading = <div>Loading................</div>;

const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));

export default function rootRouter() {
  return [
    <Route key="/" path={'/'} element={<Suspense fallback={Loading}><Main/></Suspense>} />,
    <Route key="/about" path={'/about'} element={<Suspense fallback={Loading}><About/></Suspense>} />,

      <Route path='/todo' element={<TodoIndexPage/>}>

      </Route>
  ];
}
