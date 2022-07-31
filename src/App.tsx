import AppRoutes from './routes/AppRoutes';
import { useGetDogByIdQuery } from './redux/dog/createApi';

function App() {
  const { data } = useGetDogByIdQuery(1);

  return <AppRoutes />;
}

export default App;
