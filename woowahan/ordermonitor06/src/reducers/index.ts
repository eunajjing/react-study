import { ActionType, getType } from "typesafe-actions";
import { StoreState } from "../types";
import * as Actions from "../actions";

const initializeState: StoreState = {
  monitoring: false,
  duration: 200,
  notifications: [],
  success: 0,
  failure: 0
};

export default (
  state: StoreState = initializeState,
  action: ActionType<typeof Actions>
) => {
  switch (action.type) {
    case getType(Actions.startMonitoring):
      return {
        ...state,
        monitoring: true
      };
    case getType(Actions.stopMonitoring):
      return {
        ...state,
        monitoring: false
      };
    case getType(Actions.updateOrderStatus):
      return {
        ...state,
        ...action.payload
      };
    case getType(Actions.addNotification):
      return {
        ...state,
        notifications: [
          ...state.notifications,
          { id: Date.now(), ...action.payload }
        ]
        // 새로운 배열 만들고 기존 배열을 펼치고
        // 마지막 것을 추가함
        // put은 기존 배열을 바꾸니까 put으로 넣지 않음
      };
    default:
      return Object.assign({}, state);
  }
};
