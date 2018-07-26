import React, { Component } from 'react';
import './TenDay.css';


export default class TenDay extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<li className="ten-day-wrapper">
				<div className="wrap-horiz">	
					<div className="day-wrap">
						<h1 className="day-header">{this.props.day.day}</h1>
						<span className="high-low">
							<h1>{this.props.day.high}</h1>
							<p className="divide">/</p>
							<h1>{this.props.day.low}</h1>
						</span>
					</div>
					<img className="weather-icon" src={require(`./images/${this.props.day.icon}.svg`)} />
				</div>		
			</li>
		);
	}
}

