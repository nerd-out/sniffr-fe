import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const CreateDogProfilePage = lazy(() => import('../pages/CreateDogProfilePage'));

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
    path: '/create-dog',
    element: <CreateDogProfilePage />,
  },
];

export default routes;
