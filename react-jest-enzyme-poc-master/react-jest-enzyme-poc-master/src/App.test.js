import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');

    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const afterClickText = wrapper.find('p').text();
    expect(afterClickText).toEqual('Count: 1');

    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const decrementText = wrapper.find('p').text();
    expect(decrementText).toEqual('Count: 0');
  });

  //snapshot testing
  it('Snapshot testing', () => {
    const component = shallow(<App debug />);
  
    expect(component).toMatchSnapshot();
  });
});