import { AboutPage, DogSettingsPage, HomePage, LoginPage, RegisterPage, UserSettingsPage } from '../pages';

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
    element: <DogSettingsPage />,
  },
  {
    path: '/user-settings',
    element: <UserSettingsPage />,
  },
];

export default routes;
