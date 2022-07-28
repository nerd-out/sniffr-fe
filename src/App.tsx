import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useGetDogByIdQuery } from './redux/dog/createApi';

function App() {
  console.log("process.env", process.env);
  const { data } = useGetDogByIdQuery(1);
  console.log("data", data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
        🐶 Welcome to Sniffr! 🐶
        </h2>
        <a
          className="App-link"
          href="https://github.com/the-best-team-seven/sniffr-fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the project on GitHub
        </a>
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
