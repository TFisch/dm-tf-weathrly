import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <CurrentWeather />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weathrly</h1>
        </header> */}
      </div>
    );
  }
}

export default App;
