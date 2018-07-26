import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
		localStorage.clear();
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have initial state', () => {
		expect(wrapper.state()).toEqual({ 
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
			image: '' });
	});

	it('should render a search component', () => {
		expect(wrapper.find('Search').length).toEqual(1);
	});

	it('should render a welcome component', () => {
		expect(wrapper.find('Welcome').length).toEqual(1);
	});

	it('should render a current weather, 7hour and 10 day component', () => {
		const city = 'Denver, CO';

		wrapper.instance().setLocation(city);
		wrapper.setState({searchedLocation: 'Denver, CO',
			currentCity: 99,
			currentDay: 'Tuesday',
			currentTemp: 90,
			high: 90,
			low: 20,
			summary:'HHHBJBNLLK',
			sevenHourCast: [],
			tenDayCast: [],
			isHidden: false,
			image: 'lkmdskl' 
		});
		expect(wrapper.find('CurrentWeather')).toBeDefined();
		expect(wrapper.find('CurrentWeather').length).toEqual(1);

		expect(wrapper.find('SevenHourDisplay')).toBeDefined();
		expect(wrapper.find('SevenHourDisplay').length).toEqual(1);

		expect(wrapper.find('TenDayDisplay')).toBeDefined();
		expect(wrapper.find('TenDayDisplay').length).toEqual(1);
	});

});
