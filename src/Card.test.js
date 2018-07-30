import React from 'react';
import { shallow, mount } from 'enzyme';
import data from './Api.js';
import filterWeather from './FilterWeatherData';

import Card from './Card';

let mockWeather = filterWeather(data);

describe('Card', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw} />);
	});

	it('should exist', () => {
		let wrapper = shallow(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw}/>);
		expect(wrapper).toBeDefined();
	});
	
	it('should have a time property on our 7 hour display', () => {
		wrapper = mount(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw} />);
		expect(wrapper.props().sevenHourCast[0].time).toEqual('12:00 PM');
	});

	it('should have a temp property on our 7 hour display', () => {
		wrapper = mount(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw} />);
		expect(wrapper.props().sevenHourCast[0].temp).toEqual(47);
	});

	it('should have an hour as a prop', () => {
		wrapper = mount(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw}  />);
		expect(wrapper.props().tenDayCast[0].day).toEqual('Wednesday');
	});

	it('should have a high and low prop', () => {
		wrapper = mount(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw}  />);
		expect(wrapper.props().tenDayCast[0].high).toEqual('51');
		expect(wrapper.props().tenDayCast[0].low).toEqual('32');
	});

	it('should have a icon url that matches the weather for the day', () => {
		wrapper = mount(<Card sevenHourCast={mockWeather.sevenHours} tenDayCast={mockWeather.tenDaysRaw}  />);
		expect(wrapper.props().tenDayCast[0].icon).toEqual('partlycloudy');
	});

});