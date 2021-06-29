import { takeEvery, put } from "redux-saga/effects";
import {
  signUpAction,
  signUpActionFailed,
  logInAction,
  logInActionFailed,
  gLogInAction,
  gLogInActionFailed,
  logOutAction,
  ACTION_TYPES,
} from "../actions/authAction";

function* signUp(action) {
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    }
  );

  let resp;
  if(respData.status === 200){
    resp = yield respData.json();
    yield put(signUpAction(resp));
  } else {
    resp = yield respData.json();
    console.log("error in sign up");
    yield put(signUpActionFailed(resp));
  }
  
}

function* logIn(action) {
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    }
  );

  let resp;
  if(respData.status === 200){
    resp = yield respData.json();
    yield put(logInAction(resp));
  } else {
    resp = yield respData.json();
    console.log("error in sign up");
    yield put(logInActionFailed(resp));
  }

}

function* gLogIn(action) {
    const respData = yield fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );

    let resp;
    if(respData.status === 200){
      resp = yield respData.json();
      yield put(gLogInAction(resp));
    } else {
      resp = yield respData.json();
      console.log("error in sign up");
      yield put(gLogInActionFailed(resp));
    }
    
  }

function* logOut() {
  yield put(logOutAction());
}

export default function* watchAuth() {
  yield takeEvery(ACTION_TYPES.SIGN_UP, signUp);
  yield takeEvery(ACTION_TYPES.LOG_IN, logIn);
  yield takeEvery(ACTION_TYPES.G_LOG_IN, gLogIn);
  yield takeEvery(ACTION_TYPES.LOG_OUT, logOut);
}
