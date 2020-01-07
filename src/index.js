import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {newsReducer} from "./reducers/newsReducer";
import {rootReducer} from "./reducers/rootReducer";


const reduxStore = createStore(combineReducers({
    newsReducer,
    rootReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
