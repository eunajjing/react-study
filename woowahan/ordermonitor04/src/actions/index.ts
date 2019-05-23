import { createAction } from "typesafe-actions";
// 문자열, 함수를 인자로 받는다

export const startMonitoring = createAction(
  "@command/monitoring/start",
  resolve => {
    return () => resolve();
  }
);
// 얘는 함수임
// 만약 인자값으로 문자열을 주면 () => resolve();로 들어간다
export const stopMonitoring = createAction(
  "@command/monitoring/stop",
  resolve => {
    return () => resolve();
  }
);

export const fetchSuccess = createAction("@fetch/success", resolve => {
  return () => resolve();
});

export const fetchFailure = createAction("@fetch/failure", resolve => {
  return () => resolve();
});
