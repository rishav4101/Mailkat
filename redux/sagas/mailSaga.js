import { takeEvery, put, select } from "redux-saga/effects";
import { sendMailAction, getHistoryAction, getScheduleAction, ACTION_TYPES } from "../actions/mailAction";

function* sendMail(action) {
    console.log("hi")
    const tkn = yield select((state) => state.auth.token);
    const respData = yield fetch('https://api.mailkat.weblikate.com/mail/send', {
        method: 'POST',
        
        headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${tkn}`
       },
       body: JSON.stringify(action.payload),
    })
    
    const resp = yield respData.json();
    console.log(resp);
    yield put(sendMailAction(resp.message)); 
 }

 function* getHistory() {
    const tkn = yield select((state) => state.auth.token);
    const respData = yield fetch('https://api.mailkat.weblikate.com/mail/history', {
     method: 'GET',
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tkn}`
      },
 });
    const resp = respData.json();
    console.log(resp);
    yield put(getHistoryAction(resp)); 
 }

 function* getSchedule() {
    const tkn = yield select((state) => state.auth.token);
    const respData = yield fetch('https://api.mailkat.weblikate.com/mail/schedule', {
     method: 'GET',
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tkn}`
      },
 });
    const resp = respData.json();
    console.log(resp);
    yield put(getScheduleAction(resp)); 
 }

export default function* watchMail() {
    yield takeEvery(ACTION_TYPES.SEND_MAIL, sendMail);
    yield takeEvery(ACTION_TYPES.GET_HISTORY, getHistory);
    yield takeEvery(ACTION_TYPES.GET_SCHEDULE, getSchedule);
}