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
				<h1>State {this.props.currentCity}</h1>
				<h1>Day {this.props.currentDay}</h1>
				<h1>Current High{this.props.high}</h1>
				<h1>Current Low{this.props.low}</h1>
				<h1>Summary {this.props.summary}</h1>
			</div>
		)
	}
}


export default CurrentWeather;