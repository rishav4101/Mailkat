import { takeEvery, put, select } from "redux-saga/effects";
import {
  sendMailAction,
  getHistoryAction,
  getScheduleAction,
  stopScheduleAction,
  ACTION_TYPES,
} from "../actions/mailAction";

function* sendMail(action) {
  console.log("hi");
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail/send`, {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tkn}`,
    },
    body: JSON.stringify(action.payload),
  });

//   const resp = yield respData.json();
  console.log(respData);
  yield put(sendMailAction(respData.status));
}

function* getHistory() {
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mail/history`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
    }
  );
  const resp = yield respData.json();
  console.log(resp);
  yield put(getHistoryAction(resp));
}

function* getSchedule() {
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mail/scheduled`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
    }
  );
  const resp = yield respData.json();
  console.log(resp);
  yield put(getScheduleAction(resp));
}

function* stopSchedule(action) {
   console.log("hi")
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mail/stopSchedule?taskNumber=${action.payload}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
    }
  );
  const resp = yield respData.json();
  console.log(resp);
  yield put(stopScheduleAction(resp.message));
}

export default function* watchMail() {
  yield takeEvery(ACTION_TYPES.SEND_MAIL, sendMail);
  yield takeEvery(ACTION_TYPES.GET_HISTORY, getHistory);
  yield takeEvery(ACTION_TYPES.GET_SCHEDULE, getSchedule);
  yield takeEvery(ACTION_TYPES.STOP_SCHEDULE, stopSchedule);
}
