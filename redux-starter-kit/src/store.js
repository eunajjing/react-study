import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import loggerMiddleware from './lib/loggerMiddleware';

const store = createStore(modules, applyMiddleware(loggerMiddleware));
/* 미들웨어가 여러 개일 때는 콤마로 주며 순서는 여기에서 전달한 파라미터 순.
applyMiddleware(a, b, c);
*/

export default store;