import { takeEvery, put } from "redux-saga/effects";
import {
  signUpAction,
  logInAction,
  logOutAction,
  gLogInAction,
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

  const resp = yield respData.json();
  console.log(resp);
  yield put(signUpAction(resp));
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
  const resp = yield respData.json();
  console.log(resp);
  if(!resp.token)
    resp.token = "";
  yield put(logInAction(resp));
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
    const resp = yield respData.json();
    console.log(resp);
    if(!resp.token)
      resp.token = "";
    yield put(gLogInAction(resp));
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
