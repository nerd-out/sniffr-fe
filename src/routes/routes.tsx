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
import { DogProfileWrapper } from '../pages/DogProfileSettingsPage/DogProfileWrapper';
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
    element: <PrivateRoute route={<DogProfileWrapper />} />
  },
  {
    path: '/user-settings',
    element: <UserSettingsPage />
  },
  {
    path: '/swipe',
    element: <PrivateRoute route={<Swipes />} />
  },
  {
    path: '/matches',
    element: <PrivateRoute route={<Matches />} />
  },
  {
    path: '/user-options',
    element: <PrivateRoute route={<UserOptions />} />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default routes;
