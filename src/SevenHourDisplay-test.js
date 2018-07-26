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
    wrapper = shallow(<SevenHourDisplay sevenHours={mockWeather.sevenHours} />)
	})

	it('should exist', () => {
		let wrapper = shallow(<SevenHourDisplay sevenHours={mockWeather.sevenHours} />)
		expect(wrapper).toBeDefined();
	})
	
	it('should have', () => {
		wrapper = mount(<SevenHourDisplay sevenHourCast={mockWeather.sevenHours} />)
		expect(wrapper.props().sevenHourCast[0].time).toEqual('')
	})

})