import { takeEvery, put } from "redux-saga/effects";
import { createCampaignAction, getCampaignAction, getCampaignNamesAction, ACTION_TYPES } from "../actions/campaignAction";

function* createCampaign(action) {
   const respData = yield fetch('https://api.mailkat.weblikate.com/mail/campaign', {
       method: 'POST',
       headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
       credentials: "include",
      body: JSON.stringify(action.payload),
   })
   
   const resp = yield respData.json();
   console.log(resp);
   yield put(createCampaignAction(resp.message)); 
}

function* getCampaign() {
   const respData = yield fetch('https://api.mailkat.weblikate.com/mail/campaign', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
       credentials: "include",
});
   const resp = respData.json();
   console.log(resp);
   yield put(getCampaignAction(resp)); 
}

function* getCampaignNames() {
    const respData = yield fetch('https://api.mailkat.weblikate.com/mail/campaignNames', {
     method: 'GET',
     headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
       credentials: "include",
 });
    const resp = respData.json();
    console.log(resp);
    yield put(getCampaignNamesAction(resp)); 
 }

export default function* watchCampaign() {
    yield takeEvery(ACTION_TYPES.CREATE_CAMPAIGN, createCampaign);
    yield takeEvery(ACTION_TYPES.GET_CAMPAIGN, getCampaign);
    yield takeEvery(ACTION_TYPES.GET_CAMPAIGN_NAMES, getCampaignNames);
}