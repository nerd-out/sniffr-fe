import {
  AboutPage,
  DogSettingsPage,
  HomePage,
  LoginPage,
  Matches,
  PageNotFound,
  RegisterPage,
  Swipes,
  UserOptions,
  UserSettingsPage
} from '../pages';
import PrivateRoute from './PrivateRoute';

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
    path: '/swipe',
    element: <Swipes />
  },
  {
    path: '/matches',
    element: <Matches />
  },
  {
    path: '/user-options',
    element: <PrivateRoute element={<UserOptions />} />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default routes;
