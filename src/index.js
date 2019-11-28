import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

const initialState = { term: 'bananas' };

ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
