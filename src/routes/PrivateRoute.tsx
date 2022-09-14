import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    element: React.ReactElement | any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }): React.ReactElement => {
  if (!localStorage.getItem('token')) {
    return <Navigate to={'/'} />
  }
  return element;
}

export default PrivateRoute;