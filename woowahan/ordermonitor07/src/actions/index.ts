import { createAction } from "typesafe-actions";

export const addNotification = createAction("@notification/add", resolve => {
  return (type: string, msg: string) => resolve({ type, msg });
});

// 타임라인 관련 액션 만들어야...
// 액션을 많이 만들기 싫다면, 하나로 만들어도 됨
// if/else 로직을 이용해서 만들고 싶다?
// 근데 리덕스 사상에서는
// 로직을 단순하게 만들어야 함
export const showOrderTimelineChart = createAction(
  "@command/timeline/chart/show",
  resolve => {
    return () => resolve();
  }
);

export const hideOrderTimelineChart = createAction(
  "@command/timeline/chart/hide",
  resolve => {
    return () => resolve();
  }
);

export const startMonitoring = createAction(
  "@command/monitoring/start",
  resolve => {
    return () => resolve();
  }
);

export const stopMonitoring = createAction(
  "@command/monitoring/stop",
  resolve => {
    return () => resolve();
  }
);

export const updateOrderStatus = createAction(
  "@update/order/status",
  resolve => {
    return (success: number, failure: number) => resolve({ success, failure });
  }
);

export const fetchOrderTimeline = createAction(
  "@fetch/order/timeline",
  resolve => {
    return (date: string) => resolve(date);
  }
);

export const updateOrderTimeline = createAction(
  "@udpate/order/timeline",
  resolve => {
    return (success: [], failure: []) => resolve({ success, failure });
  }
);
