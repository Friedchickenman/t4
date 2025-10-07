import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import CustomLayout from '../layouts/customLayout';

const Loading = <div>Loading................</div>;

const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));
const TodoIndexPage = lazy(() => import("../pages/todo/indexPage")); // TodoIndexPage import 추가
const ListPage = lazy(() => import("../pages/todo/listPage")); // ListPage import 추가

export default function rootRouter() {
  return [
    <Route
      key="/"
      path={'/'}
      element={<CustomLayout><Suspense fallback={Loading}><Main/></Suspense></CustomLayout>}
    />,
    <Route
      key="/about"
      path={'/about'}
      element={<CustomLayout><Suspense fallback={Loading}><About/></Suspense></CustomLayout>}
    />,
    <Route
      key="/todo"
      path={'/todo'}
      element={<CustomLayout><Suspense fallback={Loading}><TodoIndexPage/></Suspense></CustomLayout>}
    >
      {/* /todo 경로로 접근 시 기본적으로 ListPage를 보여줌 */}
      <Route index element={<ListPage />} />
      {/* /todo/list 경로로 접근 시 ListPage를 보여줌 */}
      <Route path="list" element={<ListPage />} />
    </Route>
  ];
}
