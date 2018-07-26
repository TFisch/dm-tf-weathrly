import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from './Search';
import { wrap } from 'module';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Search />);
		localStorage.clear();
	});
		
	it('should exsist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should have default state values', () => {
		expect(wrapper.state()).toEqual({
			userLocationInput: '',
			prefixTrie: null,
			suggestions: []
			});
	});

	it('should render a input field', () => {
		expect(wrapper.find('input').length).toEqual(1);
	});

	it('should render a button for submit', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should call handle change when a key is pressed', () => {
		wrapper = mount(<Search />);

		wrapper.instance().handleChange = jest.fn();
		
		let searchInput = wrapper.find('input');

		searchInput.simulate('change', { target: { value: 'f' }} );
		
		expect(wrapper.instance().handleChange).toHaveBeenCalled();
		expect(wrapper.instance().handleChange).toHaveBeenCalledTimes(1);
		
	});

	it('should update state when a key is pressed', () => {
		wrapper = mount(<Search />);
		let searchInput = wrapper.find('input');
	
		searchInput.simulate('change', { target: { value: 'f' }} );
		expect(wrapper.state().userLocationInput).toEqual('f');
	});

	it('should display suggestions for letters entered if they match a location', () => {
		wrapper = mount(<Search />)
		let searchInput = wrapper.find('input')
	
		searchInput.simulate('change', { target: { value: 'San D' }} )
		expect(wrapper.state().suggestions).toEqual(['San Diego, ca'])
		
	})

});