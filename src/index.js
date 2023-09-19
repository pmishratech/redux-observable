// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './redux/reducer';
import fetchDataEpic from './epic/epics';
import Component from './component/Component';

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  dataModule: reducer,
});

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(fetchDataEpic);

ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById('root')
);
