/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './index.reducer';
import logicList from './index.logic';
import request from '../utils/request';

const Store = () => {
  const injectedHelpers = { request };
  const logicMiddleware = createLogicMiddleware(logicList, injectedHelpers);
  const middleware = applyMiddleware(logicMiddleware);

  let store = {};

  if (process.env.NODE_ENV === 'production') {
    store = createStore(reducers, middleware);
  } else {
    store = createStore(reducers, composeWithDevTools(middleware));
  }

  return store;
};

export default Store();
