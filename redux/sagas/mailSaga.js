import { takeEvery, put, select } from "redux-saga/effects";
import {
  sendMailAction,
  sendMailActionFailed,
  getHistoryAction,
  getHistoryActionFailed,
  getScheduleAction,
  getScheduleActionFailed,
  stopScheduleAction,
  stopScheduleActionFailed,
  ACTION_TYPES,
} from "../actions/mailAction";

import {
  logOutAction,
} from "../actions/authAction";

function* sendMail(action) {
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

  let resp;
  if(respData.status === 200){
    resp = yield respData.json();
    yield put(sendMailAction(resp.message));
  } else {
    if(respData.status === 401){
      yield put(logOutAction());
    }
    resp = yield respData.json();
    console.log("error in sending mail");
    yield put(sendMailActionFailed(resp.error));
  }
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
  let resp;
  if(respData.status === 200){
    resp = yield respData.json();
    console.log(resp);
    yield put(getHistoryAction(resp));
  } else {
    if(respData.status === 401){
      yield put(logOutAction());
    }
    resp = yield respData.json();
    console.log("error in history fetch");
    yield put(getHistoryActionFailed(resp.error));
  }
  
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
  let resp;
  if(respData.status === 200)
  {
     resp = yield respData.json();
     console.log(resp);
     yield put(getScheduleAction(resp));
  }
  else{
    if(respData.status === 401){
      yield put(logOutAction());
    }
    resp = yield respData.json();
    console.log(resp);
    console.log("error in schedule fetch");
    yield put(getScheduleActionFailed(resp.error));
  }
  
}

function* stopSchedule(action) {
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

  let resp;
  if(respData.status === 200)
  {
     resp = yield respData.json();
     yield put(stopScheduleAction(resp.message));
  }
  else{
    if(respData.status === 401){
      yield put(logOutAction());
    }
    resp = yield respData.json();
    console.log(resp);
    console.log("error in schedule fetch");
    yield put(stopScheduleActionFailed(resp.error));
  }

}

export default function* watchMail() {
  yield takeEvery(ACTION_TYPES.SEND_MAIL, sendMail);
  yield takeEvery(ACTION_TYPES.GET_HISTORY, getHistory);
  yield takeEvery(ACTION_TYPES.GET_SCHEDULE, getSchedule);
  yield takeEvery(ACTION_TYPES.STOP_SCHEDULE, stopSchedule);
}
