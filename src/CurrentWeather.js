import React, { Component } from 'react';
import './CurrentWeather.css';

class CurrentWeather extends Component {
	constructor() {
		super();

	}

	render() {
	
		return(
			<div className="weather-card">	
				<div className="wrap-left">
					<h1 className="current-temp">{this.props.currentTemp}</h1>
					<h3 className="current-city curr">{this.props.currentCity}</h3>
					<h2 className="current-day curr">{this.props.currentDay}</h2>
					<span className="high-low">
						<h2 className="current-high temp-span-left curr">{this.props.high}</h2>
						<p className="divide"></p>
						<h2 className="current-low temp-span-right curr">{this.props.low}</h2>
					</span>
					<h2 className="current-summary curr">{this.props.summary}</h2>
				</div>
				<div className="wrap-right">
					<img className="current-weather-icon"  src={require(`./images/${this.props.image}.svg`)} />
				</div>	
			</div>

		);
	}
}


export default CurrentWeather;