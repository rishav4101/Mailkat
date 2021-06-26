/*------- THE MAIN SAGA COMPONENT -------*/
import { all } from "redux-saga/effects";

/* IMPORT ALL SAGA WATCHERS */
// import watchCountries from "./countriesSaga";
import watchAuth from "./authSaga";
import watchCampaign from "./campaignSaga";
import watchMail from "./mailSaga";

/* CREATE THE ROOT SAGA */
export default function* rootSaga() {
  yield all([watchAuth(), watchCampaign(), watchMail()]);
  // yield all([watchCampaign()]);
  // yield all([watchCountries()]);
 
}