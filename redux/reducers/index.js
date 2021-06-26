/*------- THE MAIN REDUCER COMPONENT -------*/
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

/* IMPORT ALL REDUCERS HERE */
import countries from "./countries"
import auth from "./auth"

/* COMBINE REDUCERS */
const combinedReducers = combineReducers({
    countries, auth
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
            if (state.auth) nextState.auth = state.auth // Preserve state during client side navigations
            return nextState;
            
        default: 
            return combinedReducers(state, action);
    }
}