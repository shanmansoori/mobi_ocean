import { fork } from "redux-saga/effects";
import DashboardSaga from "./DashboardSaga";

export default function* sagas() {
  yield fork(DashboardSaga().watcher);
}
