import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import Key from './Key'
import Search from './Search.js'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedLocation: ''
    }

    this.getWeather = this.getWeather.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }
  setLocation(search) {
    console.log(search)
    this.setState({ searchedLocation: search }, this.getWeather);
   
  }

  getWeather() {
    fetch(`http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.searchedLocation}.json`)
    .then(response => response.json()).then(data => console.log(data))
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

