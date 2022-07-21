import { lazy } from 'react';

const HomePage = lazy(()=> import('../pages/HomePage'));
const LoginPage = lazy(()=> import('../pages/LoginPage'));
const RegisterPage = lazy(()=> import('../pages/RegisterPage'));

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
    }
]

export default routes;