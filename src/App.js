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
      currentCity: '',
      currentDay: '',
      currentTemp: 0,
      high: 0,
      low: 0,
      summary:'' 

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
    .then(weatherObj => this.setState({
      currentCity: weatherObj.currCity, 
      currentDay: weatherObj.currDay, 
      currentTemp: weatherObj.currTemp,
      high: weatherObj.high,
      low: weatherObj.low,
      summary: weatherObj.summary

    }))

  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Search searchedLocation={this.state.searchedLocation} setLocation={this.setLocation} />
        <CurrentWeather 
        currentCity={this.state.currentCity} 
        currentDay={this.state.currentDay} 
        currentTemp={this.state.currentTemp} 
        high={this.state.high}
        low={this.state.low}
        summary={this.state.summary}
        />
       
      </div>
    );
  }
}

