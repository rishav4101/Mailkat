import { takeEvery, put, select } from "redux-saga/effects";
import {
  createCampaignAction,
  createCampaignActionFailed,
  getCampaignAction,
  getCampaignActionFailed,
  getCampaignNamesAction,
  getCampaignNamesActionFailed,
  ACTION_TYPES,
} from "../actions/campaignAction";

function* createCampaign(action) {
  console.log("hi")
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mail/campaign`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
      body: JSON.stringify(action.payload),
    }
  );

  console.log(respData)

  let resp;
  if(respData.status === 200){
    console.log("status 200")
    resp = yield respData.json();
    yield put(createCampaignAction(resp.message));
  } else {
    resp = yield respData.json();
    console.log("error in creating campaign");
    yield put(createCampaignActionFailed(resp.error));
  }

}

function* getCampaign() {
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mail/campaign`,
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
    yield put(getCampaignAction(resp));
  } else {
    resp = yield respData.json();
    console.log("error in getting campaign");
    yield put(getCampaignActionFailed(resp.error));
  }

}

function* getCampaignNames() {
  const tkn = yield select((state) => state.auth.token);
  const respData = yield fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mail/campaignNames`,
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
    yield put(getCampaignNamesAction(resp));
  } else {
    resp = yield respData.json();
    console.log("error in getting campaign names");
    yield put(getCampaignNamesActionFailed(resp.error));
  }

}

export default function* watchCampaign() {
  yield takeEvery(ACTION_TYPES.CREATE_CAMPAIGN, createCampaign);
  yield takeEvery(ACTION_TYPES.GET_CAMPAIGN, getCampaign);
  yield takeEvery(ACTION_TYPES.GET_CAMPAIGN_NAMES, getCampaignNames);
}
