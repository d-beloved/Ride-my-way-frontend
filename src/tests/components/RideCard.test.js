import React from 'react';
import { shallow } from 'enzyme';
import Rides from '../../components/RideCard';

describe('Form App routing component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Rides />);

    expect(wrapper.exists()).toBe(true);
  });
});
