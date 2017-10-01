import React, { Component } from 'react';
import jah from './jahcorey.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={jah} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Werb Werb's World</h1>
        </header>
        <p className="App-intro">
          Shit is coming soon
        </p>
      </div>
    );
  }
}

export default App;
