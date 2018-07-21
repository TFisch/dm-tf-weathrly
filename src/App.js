import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import Key from './Key'
import Search from './Search.js'
import filterWeather from './FilterWeatherData'
import SevenHourDisplay from './SevenHourDisplay'
import TenDayDisplay from './TenDayDisplay.js'

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
      summary:'',
      sevenHourCast: [],
      tenDayCast: [],
      isHidden: true
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
      currentCity: weatherObj.currentWeather.currCity, 
      currentDay: weatherObj.currentWeather.currDay, 
      currentTemp: weatherObj.currentWeather.currTemp,
      high: weatherObj.currentWeather.high,
      low: weatherObj.currentWeather.low,
      summary: weatherObj.currentWeather.summary,
      sevenHourCast: weatherObj.sevenHours,
      tenDayCast: weatherObj.tenDaysRaw
    }))
  }

  render() {
    return (
      <div className="App">
       <div className="banner"> 
        <Welcome />
        <Search searchedLocation={this.state.searchedLocation} setLocation={this.setLocation} />
       </div> 
        <div className="main-wrapper">
          <CurrentWeather 
          currentCity={this.state.currentCity} 
          currentDay={this.state.currentDay} 
          currentTemp={this.state.currentTemp} 
          high={this.state.high}
          low={this.state.low}
          summary={this.state.summary}
          />
          <SevenHourDisplay sevenHourCast={this.state.sevenHourCast} />
        </div>
        <TenDayDisplay tenDayCast={this.state.tenDayCast} />
      </div>
    );
  }
}

