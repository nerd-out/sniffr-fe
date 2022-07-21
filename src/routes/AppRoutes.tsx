import { BrowserRouter as Router, PathRouteProps, Route, Routes } from 'react-router-dom';

import routes from './routes';

const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <Routes>
        {routes.map((item: PathRouteProps) => <Route key={item.path} { ...item } />)}
      </Routes>
    </Router>
  )
}

export default AppRoutes;