import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from './Search';

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
			userLocationInput: props.searchedLocation,
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

	it('should update state when a key is pressed', () => {
		let searchInput = wrapper.find('input')
		
		wrapper.instance().handleChange()

		searchInput.simulate('change', { target: { value: 'foo' }} )
		expect(wrapper.state().userLocationInput).toEqual('foo')
	})



    
})