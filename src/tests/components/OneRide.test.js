import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import initialState from '../../store/intialState';
import OneRide from '../../components/OneRide';

const state = {
  ...initialState,
  oneRide: {
    ride: {},
    isLoading: false
  }
};

const match = {
  params: {
    rideId: '1',
  },
};

const middlewares = [thunk];
const mock = configureMockStore(middlewares);
const store = mock(state);

describe('One ride component', () => {
  it('tests that the component successfully renders', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <OneRide match={match} />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
