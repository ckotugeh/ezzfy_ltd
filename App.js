import ezzfy from './ezzfy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ezzfy} className="App-ezzfy" alt="ezzfy" />
        <p>
         Most reliable <code>Ezzfy</code> real estate properties for all.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
