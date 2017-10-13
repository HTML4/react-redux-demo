import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Router, IndexRoute, Route, hashHistory} from 'react-router'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from 'src/js/reducer';
import { createLogger } from 'redux-logger'
//import logger from 'Client/js/middleware/logger'
require('src/styles/main.less')
import CRouter from 'src/js/routes'
import moment from 'moment'

// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// redux 注入操作
const middleware = [thunk];
 if(process && process.env && process.env.NODE_ENV === "development") {
 	middleware.push(createLogger())
 }
const store = createStore(reducer, applyMiddleware(...middleware));
console.log("store",store.getState());


ReactDom.render((
  <Provider store={store}>
    <CRouter store={store} />
  </Provider>
), document.getElementById('root'))
