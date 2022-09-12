import {
  AboutPage,
  DogSettingsPage,
  HomePage,
  LoginPage,
  Matches,
  RegisterPage,
  Swipes,
  UserOptions,
  UserSettingsPage
} from '../pages';

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/dog-settings',
    element: <DogSettingsPage />
  },
  {
    path: '/user-settings',
    element: <UserSettingsPage />
  },
  {
    path: '/user-options',
    element: <UserOptions />
  },
  {
    path: '/swipe',
    element: <Swipes />
  },
  {
    path: '/matches',
    element: <Matches />
  }
];

export default routes;
