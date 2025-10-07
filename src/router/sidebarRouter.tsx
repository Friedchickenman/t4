import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const Loading = <div>Loading................</div>;
const SidebarPage = lazy(() => import("../pages/sidebarPage"));

export default function sidebarRouter() {
  return [
    <Route key="/sidebar" path={'/sidebar'} element={<Suspense fallback={Loading}><SidebarPage/></Suspense>} />
  ];
}
