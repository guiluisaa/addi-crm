import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import store from './io/redux/store';
import theme from './theme';
import Routes from './Routes';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default hot(module)(App);
