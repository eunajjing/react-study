import { fork, all, take, race, delay, put } from "redux-saga/effects";
// delay는 쓰레드 슬립 같은 애
// 함수를 동기적으로 사용할 수 있다

// put 액션을 디스패치한다
// 리듀서에게 액션을 보낸다

// call, apply 비동기를 기다리는 것, await 같은 애

import { getType } from "typesafe-actions";
// 문자열이 숨겨져있다보니까 해당 함수를 추출...

import * as Actions from "../actions";

function* monitoringWorkflow() {
  while (true) {
    // 이 반복문은 영원히 실행된다
    yield take(getType(Actions.startMonitoring));
    // 콜러에게 take를 준다,
    // 액션 타입이 추출되어 문자열로 받는데
    // startMonitoring이라는 문자열을 기다린다

    // 문자열 들어오면 일드가 멈춘다
    // 즉, startMonitoring가 들어왔다는 것이 약속된다
    // 모니터링 시작

    let polling = true;

    while (polling) {
      yield all([
        put({ type: getType(Actions.fetchSuccess) }),
        // 디스패치한다
        put({ type: getType(Actions.fetchFailure) })
      ]);

      const { stoped } = yield race({
        // 둘을 레이스 시킨다(경쟁 시킨다)
        // 멈추기 전까지 계속 웨이팅이 이긴다
        waitting: delay(200),
        // 기다린다, 리트라이, 기다렸다가 다시 반복문 진행
        stoped: take(getType(Actions.stopMonitoring))
      });

      if (stoped) {
        polling = false;
      }
    }
  }
}

export default function*() {
  // 사가의 run()이 실행한다
  yield fork(monitoringWorkflow);
  // 백그라운드로 특정 함수를 밀어넣는다(등록한다)
  // 함수 호출이 아니다
  // 그냥 함수를 준 것!
  // yield가 있다, 콜러에게 해당 함수 넘겨준 것
}
