import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import StudentPage from '../pages/Student/Student';
import AboutUsPage from '../pages/AboutUs';
import NotFoundPage from '../pages/NotFound';
import { useRoutes } from 'react-router-dom';

export enum RouteNames {
  Home = '/',
  Student = '/student/:username',
  AboutUs = '/about-us',
}

const LazyMainPage = React.lazy(() => import('../pages/Main/Main'));

const AppRouter = () => {
  return useRoutes([
    {
      index: true,
      element: (
        <React.Suspense fallback={<CircularProgress />}>
          <LazyMainPage />
        </React.Suspense>
      ),
    },
    { path: RouteNames.Student, element: <StudentPage /> },
    { path: RouteNames.AboutUs, element: <AboutUsPage /> },
    { path: '*', element: <NotFoundPage /> },
  ]);
};

export default AppRouter;
