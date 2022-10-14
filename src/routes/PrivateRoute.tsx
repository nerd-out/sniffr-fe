import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  route: React.ReactElement | any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  route
}): React.ReactElement => {
  if (!localStorage.getItem('x-access-token')) {
    return <Navigate to={'/'} />;
  }
  return route;
};

export default PrivateRoute;
