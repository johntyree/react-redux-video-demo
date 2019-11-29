import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const initialState = { term: 'bananas' };

var action_count = 0;

const logger = ({ getState }) => next => action => {
  const ac = action_count;
  action_count += 1;
  console.log('START', ac, action);
  const ret = next(action);
  console.log('END  ', ac, getState());
  return ret;
}

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, initialState, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
