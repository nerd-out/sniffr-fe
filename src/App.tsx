import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getDogThunk } from './redux/dog/thunks';

function App() {
  const state = useState((state: any) => state);

  console.log("state", state)

  useEffect(() => {
    getDogThunk({ payload: 1 })
  }, []);

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
      </header>
    </div>
  );
}

export default App;
