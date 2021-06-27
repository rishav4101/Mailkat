import { takeEvery, put, select } from "redux-saga/effects";
import {
  createCampaignAction,
  getCampaignAction,
  getCampaignNamesAction,
  ACTION_TYPES,
} from "../actions/campaignAction";

function* createCampaign(action) {
  console.log("hi");
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

  const resp = yield respData.json();
  console.log(resp);
  yield put(createCampaignAction(resp.message));
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
  const resp = yield respData.json();
  console.log(resp);
  yield put(getCampaignAction(resp));
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
  const resp = yield respData.json();
  console.log(resp);
  yield put(getCampaignNamesAction(resp));
}

export default function* watchCampaign() {
  yield takeEvery(ACTION_TYPES.CREATE_CAMPAIGN, createCampaign);
  yield takeEvery(ACTION_TYPES.GET_CAMPAIGN, getCampaign);
  yield takeEvery(ACTION_TYPES.GET_CAMPAIGN_NAMES, getCampaignNames);
}
