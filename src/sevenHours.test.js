import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

import SevenHours from './SevenHours';

describe('SevenHours', () => {
	let wrapper;

	beforeEach(() => {
    wrapper = shallow(<SevenHours />)
		// localStorage.clear();
	})

	it('should exist', () => {
	
		expect(wrapper).toBeDefined();
  })




})