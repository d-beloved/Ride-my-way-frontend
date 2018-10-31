import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 *
 * @param {object} initialState the initial state
 *
 * @return {object} returns an object
 */
export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk),
      window.devToolsExtension && process.env.NODE_ENV === 'development' ? window.devToolsExtension() : f => f), // eslint-disable-line
  );
}
