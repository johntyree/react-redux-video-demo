import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import actionLogger from './middleware/actionLogger';


const initialState = { term: 'bananas' };
const middleware = applyMiddleware(thunk, actionLogger);
const store = createStore(reducers, initialState, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
