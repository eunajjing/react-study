import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { StoreState } from "./types";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
// 비동기적인 상태를 관리하기 위해 사용하는 미들웨어
import rootSaga from "./sagas";
import App from "./App";


const sagaMiddleware = createSagaMiddleware();
const store: StoreState = createStore(reducer, applyMiddleware(sagaMiddleware));

const rootElement: HTMLElement = document.getElementById("root");

sagaMiddleware.run(rootSaga);
// 제너레이터 함수를 인자로 넣어준다
// 사가 실행

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
