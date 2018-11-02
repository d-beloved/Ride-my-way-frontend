import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('Form App routing component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
