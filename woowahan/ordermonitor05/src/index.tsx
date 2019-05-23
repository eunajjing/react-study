import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// 미들웨어 모니터링 가능한 개발자도구
// 리덕스 데브 툴즈
// 그래서 스토어 만드는 게 좀 달라졌다...
import { StoreState } from "./types";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();
const store: StoreState = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const rootElement: HTMLElement = document.getElementById("root");

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
