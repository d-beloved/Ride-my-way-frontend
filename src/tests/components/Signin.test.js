import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import initialState from '../../store/intialState';
import Signin from '../../components/Signin/Signin';

const state = {
  ...initialState
};

const path = {
  location: {
    state: 'pathname'
  },
};

const middlewares = [thunk];
const mock = configureMockStore(middlewares);
const store = mock(state);

describe('Signin component', () => {
  it('tests that the component successfully renders', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Signin location={path.location} />
        </Router>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
