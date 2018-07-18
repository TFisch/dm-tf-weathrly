import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import { data } from './Api.js'
import Search from './Search.js'

console.log(data)

class App extends Component {
  constructor() {
    super();
    this.state = {


    }
  }


  render() {
    return (
      <div className="App">
        <Welcome />
        <Search />
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
