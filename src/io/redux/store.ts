import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';

const initialState = {};
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

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  compose(...composeOptions)
);

const persistor = persistStore(store as any);

export { store, persistor };
