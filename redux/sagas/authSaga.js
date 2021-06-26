import { takeEvery, put } from "redux-saga/effects";
import { signUpAction, logInAction, ACTION_TYPES } from "../actions/authAction";

function* signUp(action) {
   const respData = yield fetch('https://api.mailkat.weblikate.com/auth/signup', {
       method: 'POST',
    //    mode:'no-cors',
       headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
   });
   
   const resp = yield respData.json();
   console.log(resp);
   yield put(signUpAction(resp.message)); 
}

function* logIn(action) {
   const respData = yield fetch('https://api.mailkat.weblikate.com/auth/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(action.payload),
});
   const resp = yield respData.json();
   console.log(resp);
   yield put(logInAction(resp.message)); 
}

export default function* watchAuth() {
    yield takeEvery(ACTION_TYPES.SIGN_UP, signUp);
    yield takeEvery(ACTION_TYPES.LOG_IN, logIn);
}