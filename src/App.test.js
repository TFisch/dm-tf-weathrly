import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

})