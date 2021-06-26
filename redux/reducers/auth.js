import { ACTION_TYPES } from "../actions/authAction";

const initialState = {
    signUpMsg: "",
    logInMsg: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SIGNED_UP:
            console.log(action.payload)
            return {...state, signUpMsg:action.payload};
        case ACTION_TYPES.LOGGED_IN:
            console.log(action)
            return {...state, logInMsg:action.payload};
        default:
            return state;
    }
}