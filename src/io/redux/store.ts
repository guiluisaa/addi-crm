import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const middleware = [thunk];

const composeOptions = [applyMiddleware(...middleware)];
const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();
if (
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  process.env.ENVIRONMENT !== 'production'
)
  composeOptions.push(reduxDevTools);

const store = createStore(rootReducer, compose(...composeOptions));

export default store;
