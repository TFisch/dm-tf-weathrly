import React from 'react';
import { shallow, mount } from 'enzyme';
import data from './Api.js'
import filterWeather from './FilterWeatherData'

let mockWeather = filterWeather(data)

import TenDayDisplay from './TenDayDisplay';

describe('TenDayDisplay', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
    wrapper = shallow(<TenDayDisplay tenDayCast={mockWeather.tenDaysRaw} />)
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

  it("should have an hour as a prop", () => {
		wrapper = mount(<TenDayDisplay tenDayCast={mockWeather.tenDaysRaw} />)
		expect(wrapper.props().tenDayCast[0].day).toEqual("Wednesday")
	})

	it('should have a high and low prop', () => {
		wrapper = mount(<TenDayDisplay tenDayCast={mockWeather.tenDaysRaw} />)
		expect(wrapper.props().tenDayCast[0].high).toEqual('51')
		expect(wrapper.props().tenDayCast[0].low).toEqual('32')
	})

	it('should have a icon url that matches the weather for the day', () => {
		wrapper = mount(<TenDayDisplay tenDayCast={mockWeather.tenDaysRaw} />)
		expect(wrapper.props().tenDayCast[0].icon).toEqual('partlycloudy')
	})

})