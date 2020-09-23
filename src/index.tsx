import React from 'react';
import { render } from 'react-dom';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import mockedApi from './mock/mockedApi';

mockedApi();

render(<App />, document.getElementById('root'));
