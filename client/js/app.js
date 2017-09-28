import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Router, IndexRoute, Route, hashHistory} from 'react-router'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from 'Client/js/reducer';

import logger from 'Client/js/middleware/logger'
require('Client/styles/main.less')
import CRouter from 'Client/js/routes.js'

// redux 注入操作
const middleware = [thunk,logger];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());


ReactDom.render((
  <Provider store={store}>
    <CRouter store={store} />
  </Provider>
), document.getElementById('root'))