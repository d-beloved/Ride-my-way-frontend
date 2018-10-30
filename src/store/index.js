import { createStore, applyMiddleware } from 'redux'
// import { rootReducer } from './rootReducer'
import reduxImmutableInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'


export function configureStore(initialState) {
  return createStore(
    applyMiddleware(
      thunk,
      reduxImmutableInvariant()
    )
  )
}
