import React, { Component } from 'react'
import './CurrentWeather.css'



class CurrentWeather extends Component {
  constructor(props) {
		super();
			// this.currentCity = '',
			// this.currentCondition = '',
			// this.currentDay = '',
			// this.currentTemp = 0,
			// this.currentHigh = 0,
			// this.currentLow = 0,
			// this.forcastSummary = ''
		
	}

	// updateState = () => {
	// 	this.setState({ currentCity: e.target.value })
	// }

	render() {
		return(
			<div className="weather-card">	
				<h1 class="current-temp">Current Temp {this.props.currentTemp}</h1>
				<h3 class="current-city">City {this.props.currentCity}</h3>
				<h2 class="current-day">Day {this.props.currentDay}</h2>
				<h2 class="current-high">Current High{this.props.high}</h2>
				<h2 class="current-Low">Current Low{this.props.low}</h2>
				<h2 class="current-summary">Summary {this.props.summary}</h2>
			</div>
		)
	}
}


export default CurrentWeather;