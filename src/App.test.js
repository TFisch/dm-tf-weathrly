import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
    wrapper = shallow(<App />)
		// localStorage.clear();
	})

	it('should exist', () => {
	
		expect(wrapper).toBeDefined();
  })

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
    image: "" })
  })

  it('should render child components', () => {
    
  })


})