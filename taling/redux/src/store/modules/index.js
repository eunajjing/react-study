import { combineReducers } from "redux";
import counter from "./counter";
import waiting from "./waiting";

export default combineReducers({ counter, waiting });
// 리듀서가 여러 개인 경우 모아서 스토어에 보냄
