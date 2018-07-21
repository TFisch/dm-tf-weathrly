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
				<h1 className="current-temp">{this.props.currentTemp}</h1>
				<h3 className="current-city">{this.props.currentCity}</h3>
				<h2 className="current-day">{this.props.currentDay}</h2>
				<span className="high-low">
					<h2 className="current-high temp-span-left">{this.props.high}</h2>
					<p className="divide">/</p>
					<h2 className="current-low temp-span-right">{this.props.low}</h2>
				</span>
				<h2 className="current-summary">{this.props.summary}</h2>
			</div>
		)
	}
	isHidden() {

	}

}


export default CurrentWeather;