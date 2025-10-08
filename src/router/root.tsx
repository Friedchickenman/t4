import { lazy, Suspense } from 'react';
import { Route, Navigate } from 'react-router-dom';
import CustomLayout from '../layouts/customLayout';

const Loading = <div>Loading................</div>;

// 페이지 컴포넌트 import
const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));
import TodoIndex from '../pages/todo/indexPage';
const ListPage = lazy(() => import("../pages/todo/listPage"));
const AddPage = lazy(() => import("../pages/todo/addPage"));
const ReadPage = lazy(() => import("../pages/todo/readPage"));

export default function rootRouter() {
  return [
    // 메인 페이지 경로
    <Route
      key="/"
      path={'/'}
      element={<CustomLayout><Suspense fallback={Loading}><Main/></Suspense></CustomLayout>}
    />,
    // About 페이지 경로
    <Route
      key="/about"
      path={'/about'}
      element={<CustomLayout><Suspense fallback={Loading}><About/></Suspense></CustomLayout>}
    />,
    // Todo 중첩 라우팅
    <Route
        key="/todo"
        path="/todo"
        element={
            <CustomLayout>
                <TodoIndex/>
            </CustomLayout>
        }
    >
        <Route index element={<Navigate to={'list'} replace />} />
        <Route path={'list'} element={<Suspense fallback={Loading}><ListPage/></Suspense>} />
        <Route path={'add'} element={<Suspense fallback={Loading}><AddPage/></Suspense>} />
        <Route path={'read/:tno'} element={<Suspense fallback={Loading}><ReadPage/></Suspense>} />
    </Route>
  ];
}
