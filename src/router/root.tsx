import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import TodoIndexPage from "../pages/todo/indexPage.tsx";
import ListPage from "../pages/todo/listPage.tsx";
import {Navigate} from "react-router";

const Loading = <div>Loading................</div>;

const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));

export default function rootRouter() {
  return [
    <Route key="/" path={'/'} element={<Suspense fallback={Loading}><Main/></Suspense>} />,
    <Route key="/about" path={'/about'} element={<Suspense fallback={Loading}><About/></Suspense>} />,

      <Route path='/todo' element={<TodoIndexPage/>}>

          <Route index element={<Navigate to={'list'} replace />}></Route>

          <Route path='list' element={<ListPage/>}></Route>

      </Route>
  ];
}
