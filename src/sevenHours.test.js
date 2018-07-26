import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import data from './Api.js';
import filterWeather from './FilterWeatherData';

let mockWeather = filterWeather(data);

import SevenHours from './SevenHours';

describe('SevenHours', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<SevenHours time={mockWeather.sevenHours.time}/>);
	});

	it('should exist', () => {
		wrapper = shallow(<SevenHours time={mockWeather.hour.time} temp="30" src="cloudy" />);
		expect(wrapper).toBeDefined();
	});
});