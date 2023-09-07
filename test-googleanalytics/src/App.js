import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = (buttonName) => {
    alert(`Vous avez cliqué sur le bouton ${buttonName}`);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={() => handleClick('Bouton 1')}>Bouton 1</button>
          <button onClick={() => handleClick('Bouton 2')}>Bouton 2</button>
          <button onClick={() => handleClick('Bouton 3')}>Bouton 3</button>
        </div>
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
