import React from 'react';
import { shallow, mount } from 'enzyme';
import data from './Api.js'
import filterWeather from './FilterWeatherData'

import SevenHourDisplay from './SevenHourDisplay';

let mockWeather = filterWeather(data)

describe('SevenHourDisplay', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
    wrapper = shallow(<SevenHourDisplay sevenHourCast={mockWeather.sevenHours} />)
	})

	it('should exist', () => {
		let wrapper = shallow(<SevenHourDisplay sevenHourCast={mockWeather.sevenHours} />)
		expect(wrapper).toBeDefined();
	})
	
	it('should have a time property on out 7 hour display', () => {
		wrapper = mount(<SevenHourDisplay sevenHourCast={mockWeather.sevenHours} />)
		expect(wrapper.props().sevenHourCast[0].time).toEqual('12:00 PM')
	})

	it('should have a temp property on out 7 hour display', () => {
		wrapper = mount(<SevenHourDisplay sevenHourCast={mockWeather.sevenHours} />)
		expect(wrapper.props().sevenHourCast[0].temp).toEqual(47)
	})

})