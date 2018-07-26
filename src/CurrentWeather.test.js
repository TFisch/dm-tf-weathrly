import React from 'react';
import { shallow, mount } from 'enzyme';
import data from './Api.js';
import filterWeather from './FilterWeatherData';

import CurrentWeather from './CurrentWeather';

let mockWeather = filterWeather(data);

describe('SevenHourDisplay', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<CurrentWeather currentCity={mockWeather.currentWeather.currCity} 
			currentDay={mockWeather.currentWeather.currDay} 
			currentTemp={mockWeather.currentWeather.currTemp} 
			high={mockWeather.currentWeather.high}
			low={mockWeather.currentWeather.low}
			summary={mockWeather.currentWeather.summary}
			image={mockWeather.currentWeather.image} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have properties for the current day', () => {
		wrapper = mount(<CurrentWeather currentCity={mockWeather.currentWeather.currCity} 
			currentDay={mockWeather.currentWeather.currDay} 
			currentTemp={mockWeather.currentWeather.currTemp} 
			high={mockWeather.currentWeather.high}
			low={mockWeather.currentWeather.low}
			summary={mockWeather.currentWeather.summary}
			image={mockWeather.currentWeather.image} />);
		expect(wrapper.props().currentCity).toEqual('Louisville, KY');
		expect(wrapper.props().currentDay).toEqual('Wednesday');
		expect(wrapper.props().currentTemp).toEqual(46);
		expect(wrapper.props().high).toEqual('51');
		expect(wrapper.props().low).toEqual('32');
		expect(wrapper.props().summary).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
		expect(wrapper.props().image).toEqual('mostlycloudy');
	});
	it('should return a weather card div with an image', () => {
		expect(wrapper.find('.weather-card').length).toEqual(1);
		expect(wrapper.find('.current-weather-icon').length).toEqual(1);
	});

});