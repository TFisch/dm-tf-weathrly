import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import Key from './Key'
import Search from './Search.js'
import filterWeather from './FilterWeatherData'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedLocation: '',
      currentCity: ''

    }

    this.getWeather = this.getWeather.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }
  setLocation(search) {
    this.setState({ searchedLocation: search }, this.getWeather);
  }

  getWeather() {
    fetch(`http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${this.state.searchedLocation}.json`)
    .then(response => response.json())
    .then(data => filterWeather(data))
    .then(filterResponse => this.setState({currentCity: filterResponse.currCity}))

  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search searchedLocation={this.state.searchedLocation} setLocation={this.setLocation} />
        <CurrentWeather currCity={this.state.currentCity} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weathrly</h1>
        </header> */}
      </div>
    );
  }
}

