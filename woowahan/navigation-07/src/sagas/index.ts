import {
  all,
  fork,
  take,
  select,
  delay,
  put,
  call,
  takeLatest,
  race
} from "redux-saga/effects";
import moment from "moment";
import { getType } from "typesafe-actions";
import * as Actions from "../actions";
import * as Api from "../apis/orders";
import { IStoreState, IAuthentication } from "../store";

function* fetchOrderTimeline() {
  const {
    results: { successTimeline, failureTimeline }
  } = yield call(Api.fetchOrderTimeline, moment().format("YYYYMMDD"));

  yield put(Actions.updateOrderTimeline(successTimeline, failureTimeline));
}

function* authenticationWorkflow() {
  while (true) {
    let auth = yield select(
      (state: IStoreState): IAuthentication => state.authentication
    );
    let waitLogin = !auth;

    while (waitLogin) {
      try {
        const {
          payload: { username, password }
        } = yield take(getType(Actions.requestLogin));

        const { result } = yield call(Api.requestLogin, username, password);

        waitLogin = false;

        sessionStorage.setItem(
          "authentication",
          JSON.stringify({
            ...result
          })
        );

        yield put(Actions.successLogin({ ...result }));
      } catch (e) {
        if (e instanceof Api.ApiError) {
          yield put(Actions.addNotification("error", e.errorMessage));
        } else {
          console.error(e);
        }
      }
    }

    yield take(getType(Actions.requestLogout));

    sessionStorage.removeItem("authentication");

    yield put(Actions.successLogout());
  }
}

function* monitoringWorkflow() {
  while (yield take(getType(Actions.startMonitoring))) {
    let polling = true;

    while (polling) {
      try {
        const [succResp, failResp] = yield all([
          call(Api.fetchNumberOfSuccessfulOrder),
          call(Api.fetchNumberOfFailedOrder)
        ]);

        const { showTimeline }: IStoreState = yield select();

        if (showTimeline) {
          yield fork(fetchOrderTimeline);
        }

        yield put(
          Actions.updateOrderStatus(
            succResp.result.success,
            failResp.result.failure
          )
        );
      } catch (e) {
        if (e instanceof Api.ApiError) {
          yield put(Actions.addNotification("error", e.errorMessage));
        } else {
          console.error(e);
        }
      }

      const { monitoring, duration }: IStoreState = yield select();

      if (!monitoring) {
        polling = false;
      }

      yield delay(duration);
    }
  }
}

function* watchFetchOrderTimeline() {
  yield takeLatest(getType(Actions.showOrderTimelineChart), fetchOrderTimeline);
}

export default function*() {
  yield fork(monitoringWorkflow);
  yield fork(authenticationWorkflow);
  yield fork(watchFetchOrderTimeline);
}
