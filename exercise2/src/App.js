import React from 'react';
import logo from './ntwTeam.jpg';
import './App.css';


//Functional Component returning JSX(App component)*JSX elements not html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> National Theatre Wales TEAM APP Test</h1>
        <p>learn react</p>
      </header>
    </div>
  );
}

export default App;
