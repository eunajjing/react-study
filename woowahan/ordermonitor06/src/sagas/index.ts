import { all, fork, take, select, delay, put, call } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";
import * as Api from "../apis/orders";
import { StoreState } from "../types";

function* monitoringWorkflow() {
  while (yield take(getType(Actions.startMonitoring))) {
    let polling = true;

    while (polling) {
      try {
        const [succResp, failResp] = yield all([
          call(Api.fetchNumberOfSuccessfulOrder),
          call(Api.fetchNumberOfFailedOrder)
        ]);

        yield put(
          Actions.updateOrderStatus(
            succResp.result.success,
            failResp.result.failure
          )
        );
      } catch (e) {
        // 사가는 throw로 던지기 때문에 캐치 구문으로 잡는다...
        if (e instanceof Api.ApiError) {
          yield put(Actions.addNotification("error", e.errorMessage));
        } else {
          console.error(e);
          // 런타임 익셉션
        }
        // 처리가 애매할 수도 있음
      }

      const { monitoring, duration }: StoreState = yield select();

      if (!monitoring) {
        polling = false;
      }

      yield delay(duration);
    }
  }
}

export default function*() {
  yield fork(monitoringWorkflow);
}
