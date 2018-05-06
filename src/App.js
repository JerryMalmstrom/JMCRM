import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to JM-CRM</h1>
        </header>
        <p className="App-intro">
          Här kommer det väl text och så...
        </p>
      </div>
    );
  }
}

export default App;