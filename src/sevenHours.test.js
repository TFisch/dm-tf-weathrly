import { shallow, mount } from 'enzyme';
import React from 'react';
import SevenHours from './SevenHours';

describe('SevenHours', () => {
	let wrapper;
	let mock =  { time: '6:00 PM', temp: 45, icon: 'clear' }; 
	
	beforeEach(() => {
		wrapper = shallow(<SevenHours  hour={mock}  />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have props of hour, time and icon', () => {
		wrapper = mount(<SevenHours  hour={mock}  />);
		expect(wrapper.props().hour).toEqual({ time: '6:00 PM', temp: 45, icon: 'clear' });
	});

	it('should return a div with a list item and an image of current weather', () => {
		expect(wrapper.find('.seven-day-wrapper').length).toEqual(1);
		expect(wrapper.find('.seven-day-display').length).toEqual(1);
		expect(wrapper.find('.weather-icon-seven').length).toEqual(1);
	});
});