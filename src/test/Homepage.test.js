import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

import Homepage from '../components/Homepage/Homepage';

configure({ adapter: new Adapter() });

describe('Homepage component', () => {
  it('tests that the component successfully renders', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.exists()).toBe(true);
  });
});
