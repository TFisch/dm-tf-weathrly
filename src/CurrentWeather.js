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
				{/* <h1>State {this.currentCity}</h1>
				<h1>Current Weather {this.currentCondition}</h1>
				<h1>Day {this.currentDay}</h1>
				<h1>Current Temp {this.currentTemp}</h1>
				<h1>Current High {this.currentHigh}</h1>
				<h1>Current Low {this.currentLow}</h1>
				<h1>Summary {this.forcastSummary}</h1> */}
			</div>
		)
	}
}


export default CurrentWeather;