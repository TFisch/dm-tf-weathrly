import { shallow, mount } from 'enzyme';
import React from 'react';
import TenDay from './TenDay';

describe('TenDay', () => {
	let wrapper;
	let mock =  {
           day: 'Wednesday', high: '51', low: '32', icon: 'partlycloudy',
           day: 'Thursday', high: '55', low: '51', icon: 'clear' ,
           day: 'Friday', high: '57', low: '44', icon: 'chancerain' ,
           day: 'Saturday', high: '47', low: '30', icon: 'rain' ,
           day: 'Sunday', high: '37', low: '22', icon: 'cloudy' ,
           day: 'Monday', high: '35', low: '19', icon: 'clear' ,
           day: 'Tuesday', high: '32', low: '20', icon: 'partlycloudy' ,
           day: 'Wednesday', high: '33', low: '26', icon: 'partlycloudy' ,
           day: 'Thursday', high: '35', low: '23', icon: 'snow' ,
           day: 'Friday', high: '31', low: '18', icon: 'partlycloudy' }
          
	
	beforeEach(() => {
		wrapper = shallow(<TenDay  day={mock}  />)
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined();
    })

	it('should have props of a day, a high a low and an icon', () => {
		wrapper = mount(<TenDay  day={mock}  />)
        expect(wrapper.props().day).toEqual({ 
        day: 'Friday', high: '31', low: '18', icon: 'partlycloudy' })
    })
    
    it('should return a list item', () => {
        expect(wrapper.find('.ten-day-wrapper').length).toEqual(1);
    })
})