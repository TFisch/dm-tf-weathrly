import React, { Component } from 'react'
import './CurrentWeather.css'



class CurrentWeather extends Component {
  constructor() {
		super();
		this.state = {
			currentCity: '',
			currentCondition: '',
			currentDay: '',
			currentTemp: 0,
			currentHigh: 0,
			currentLow: 0,
			forcastSummary: ''
		}
	}

	// updateState = () => {
	// 	this.setState({ currentCity: e.target.value })
	// }

	render() {
		return(
			<div className="weather-card">	
				<h1>State</h1>
				<h1>Current Weather</h1>
				<h1>Day</h1>
				<h1>Current Temp</h1>
				<h1>Current High</h1>
				<h1>Current Low</h1>
				<h1>Summary</h1>
			</div>
		)
	}
}


export default CurrentWeather;