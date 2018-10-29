import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Search from '../components/App'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
