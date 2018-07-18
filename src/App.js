import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import { data } from './Api.js'
import Search from './Search.js'

console.log(data)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedLocation: '',
      weatherData: data

    }

    this.setLocation = this.setLocation.bind(this)
  }

  setLocation(search) {
    this.setState({ searchedLocation: search.userLocationInput })
  }


  render() {
    return (
      <div className="App">
        <Welcome />
        <Search searchedLocation={this.state.searchedLocation} setLocation={this.setLocation} />
        <CurrentWeather />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weathrly</h1>
        </header> */}
      </div>
    );
  }
}

