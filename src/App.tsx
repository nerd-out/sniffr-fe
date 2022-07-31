
import AppRoutes from './routes/AppRoutes';
import { useGetDogByIdQuery } from './redux/dog/createApi';

function App() {
  const { data } = useGetDogByIdQuery(1);
  console.log('data', data);

  return (
    <AppRoutes/>
  );
}

export default App;
