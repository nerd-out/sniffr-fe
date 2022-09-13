import {
  AboutPage,
  DogProfileSettingsPage,
  HomePage,
  LoginPage,
  Matches,
  PageNotFound,
  RegisterPage,
  Swipes,
  UserOptions
} from 'sniffr-pages';

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
    element: <DogProfileSettingsPage />
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
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default routes;
