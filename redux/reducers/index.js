/*------- THE MAIN REDUCER COMPONENT -------*/
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

/* IMPORT ALL REDUCERS HERE */
import auth from "./auth"
import campaign from "./campaign"
import mail from "./mail"

/* COMBINE REDUCERS */
const combinedReducers = combineReducers({
   auth, campaign, mail
})  

export default function reducer(state, action) {
    switch(action.type) {
        /* ON HYDRATE */
        case HYDRATE:
            const nextState = {
            ...state,
            ...action.payload,
            }
            // if (state.countries) nextState.countries = state.countries
            if (state.auth) nextState.auth = state.auth
            if (state.mail) nextState.mail = state.mail
            if (state.campaign) nextState.campaign = state.campaign // Preserve state during client side navigations
            return nextState;
            
        default: 
            return combinedReducers(state, action);
    }
}