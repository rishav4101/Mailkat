/*------- THE MAIN REDUCER COMPONENT -------*/
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

/* IMPORT ALL REDUCERS HERE */
import auth from "./auth"
import campaign from "./campaign"
import mail from "./mail"

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth', 'mail', 'campaign']
}
  
const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['token']
}

const mailPersistConfig = {
    key: 'mail',
    storage: storage,
    whitelist: ['history', 'schedule']
}

const campaignPersistConfig = {
    key: 'campaign',
    storage: storage,
    whitelist: ['campaigns', 'campaignNames']
}

/* COMBINE REDUCERS */
const combinedReducers = combineReducers({
   'auth' : persistReducer(authPersistConfig, auth), 
   'campaign' : persistReducer(campaignPersistConfig, campaign), 
   'mail' : persistReducer(mailPersistConfig, mail)
})  

const pr = persistReducer(rootPersistConfig, combinedReducers)

export default function reducer(state, action) {
    switch(action.type) {
        /* ON HYDRATE */
        case HYDRATE:
            const nextState = {
            ...state,
            ...action.payload,
            }

            if (state.auth) nextState.auth = state.auth
            if (state.mail) nextState.mail = state.mail
            if (state.campaign) nextState.campaign = state.campaign // Preserve state during client side navigations
            return nextState;
            
        default: 
            return pr(state, action);
    }
}