import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  PathRouteProps,
  Route,
  Routes,
} from 'react-router-dom';

import { Layout } from '../pages';
import routes from './routes';

const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <Suspense>
        <Layout>
          <Routes>
            {routes.map((item: PathRouteProps) => (
              <Route key={item.path} {...item} />
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
