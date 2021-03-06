import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';
// import {createPromise} from 'redux-promise-middleware';
// import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';

const logger = createLogger();

// const pm = createPromise({
//     promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
// });

const store = createStore(modules, applyMiddleware(logger, penderMiddleware()));
/* 미들웨어가 여러 개일 때는 콤마로 주며 순서는 여기에서 전달한 파라미터 순.
applyMiddleware(a, b, c);
*/

export default store;