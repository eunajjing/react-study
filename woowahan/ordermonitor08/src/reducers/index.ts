import { ActionType, getType } from "typesafe-actions";
import { StoreState, ITimelineItem } from "../types";
import * as Actions from "../actions";

const initializeState: StoreState = {
  monitoring: false,
  showTimeline: false,
  duration: 200,
  notifications: [],
  success: 0,
  failure: 0,
  successTimeline: [],
  failureTimeline: []
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
    case getType(Actions.showOrderTimelineChart):
      return {
        ...state,
        showTimeline: true
      };
    case getType(Actions.hideOrderTimelineChart):
      return {
        ...state,
        showTimeline: false
      };
    case getType(Actions.updateOrderStatus):
      return {
        ...state,
        ...action.payload
      };
    case getType(Actions.updateOrderTimeline):
      const { success, failure } = action.payload;
      return {
        ...state,
        successTimeline: success.map(([time, count]) => ({ time, count })),
        failureTimeline: failure.map(([time, count]) => ({ time, count }))
      };
    case getType(Actions.addNotification):
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            ...action.payload,
            show: false,
            timestamp: Date.now()
          }
        ]
      };
    case getType(Actions.showedNotification):
      return {
        ...state,
        notifications: state.notifications.map(noti =>
          noti.id === action.payload.id ? { ...noti, show: true } : noti
        )
        // 아이디에 맞는 것의 값을 바꿈
      };
    default:
      return Object.assign({}, state);
  }
};

// 토스트를 어떻게 띄울 것인가
// 일단 상태를 받아야 하니까 컨테이너는 있어야 하는데
// 컴포넌트는 어카지?
// ui가 있다면 컴포넌트 만들어야 하고
// 라이브러리가 컴포넌트를 제공한다면 안 만들어도 돼