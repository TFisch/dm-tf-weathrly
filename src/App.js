import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import Greeting from './Greeting';
import Key from './Key';
import Search from './Search.js';
import filterWeather from './FilterWeatherData';
import Card from './Card.js'

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			searchedLocation: '',
			currentCity: '',
			currentDay: '',
			currentTemp: null,
			high: null,
			low: null,
			summary:'',
			sevenHourCast: [],
			tenDayCast: [],
			isHidden: true,
			image: ''
		};

		this.getWeather = this.getWeather.bind(this);
		this.setLocation = this.setLocation.bind(this);
	}
	setLocation(search) {
		this.getWeather(search);
		localStorage.setItem('savedLocation', search);
	}

	componentDidMount() {
		if (localStorage.savedLocation) {
			let savedCity = localStorage.getItem('savedLocation'); 
			this.setLocation(savedCity);
		} else {
			return;
		}
	}
  
	getWeather(search) {
		fetch(`http://api.wunderground.com/api/${Key}/geolookup/conditions/hourly/forecast10day/q/${search}.json`)
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
				tenDayCast: weatherObj.tenDaysRaw,
				image: weatherObj.currentWeather.image,
				isHidden: false,
				searchedLocation: search
			}))
			.catch(err => {alert('hey this is not a valid location please enter another'),
			this.setState({ searchedLocation: ''}),
			localStorage.clear();
			});
	}

	render() {
		if(this.state.isHidden === true){
			return (
				<div className="App">
					<div className="banner"> 
						<Welcome />
						<Search searchedLocation={this.state.searchedLocation} setLocation={this.setLocation} />
					</div>
					<Greeting />
				</div> 
			);
		} else {
			return (
				<div className="App">
					<div className="banner"> 
						<Welcome />
						<Search searchedLocation={this.state.searchedLocation} setLocation={this.setLocation} />
					</div>
					<div className="main-wrapper">
						<div className="upper-container">
							<CurrentWeather 
								currentCity={this.state.currentCity} 
								currentDay={this.state.currentDay} 
								currentTemp={this.state.currentTemp + 'º'}  
								high={this.state.high + 'º /'}
								low={this.state.low + 'º'}
								summary={this.state.summary}
								image={this.state.image}
							/>
						</div>
						<Card sevenHourCast={this.state.sevenHourCast} tenDayCast={this.state.tenDayCast}/>
					</div>
				</div>
			);
		}
	}
}

