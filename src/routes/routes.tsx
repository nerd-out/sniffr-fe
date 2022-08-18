import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const DogProfileSettingsPage = lazy(
  () => import('../pages/DogProfileSettingsPage')
);

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/dog-settings',
    element: <DogProfileSettingsPage />,
  },
];

export default routes;
