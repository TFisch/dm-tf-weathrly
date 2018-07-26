import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from './Search';
import { wrap } from 'module';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
    wrapper = shallow(<Search />)
	localStorage.clear();
	})
		
	it('should exsist', () => {
		expect(wrapper).toBeDefined()
	})

	it('should have default state values', () => {
		expect(wrapper.state()).toEqual({
			userLocationInput: '',
			prefixTrie: null,
			suggestions: []
		})
	})

	it('should render a input field', () => {
		expect(wrapper.find("input").length).toEqual(1)
	})

	it('should render a button for submit', () => {
		expect(wrapper.find("button").length).toEqual(1)
	})

	it('should call handle change when a key is pressed', () => {
		// wrapper.instance().handleChange = jest.fn();
		// wrapper.instance().displaySuggestions = jest.fn();

        // let searchInput = wrapper.find('input');

        // searchInput.simulate('change', { target: { value: 'f' }} )
		
		// expect(jest.fn().mock.calls.length).toEqual(1)
		// expect(wrapper.instance().handleChange).toHaveBeenCalledTimes(1)
		
		// expect(wrapper.instance().displaySuggestions).toHaveBeenCalled();
		// expect(wrapper.instance().displaySuggestions).toHaveBeenCalledTimes(1)
	})

	// it('should update state when a key is pressed', () => {
	// 	let searchInput = wrapper.find('input')
	
	// 	searchInput.simulate('change', { target: { value: 'f' }} )
	// 	expect(wrapper.state().userLocationInput).toEqual('f')
	// })

})