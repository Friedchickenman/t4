import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import CustomLayout from '../layouts/customLayout';

const Loading = <div>Loading................</div>;

// 페이지 컴포넌트 import
const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));
// import TodoIndex from '../pages/todo/indexPage'; // 잠시 주석 처리

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
    // Todo 페이지 경로를 테스트용으로 잠시 변경
    <Route
        key="/todo"
        path="/todo"
        element={
            <CustomLayout>
                <div className="text-2xl font-bold">Todo Route Test</div>
            </CustomLayout>
        }
    />
  ];
}
