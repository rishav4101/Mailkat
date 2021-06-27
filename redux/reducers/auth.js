import { ACTION_TYPES } from "../actions/authAction";

const initialState = {
    signUpMsg: "",
    logInMsg: "",
    token: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SIGNED_UP:
            console.log(action.payload)
            return {...state, signUpMsg:action.payload.msg, token:action.payload.tkn};
        case ACTION_TYPES.LOGGED_IN:
            console.log(action)
            return {...state, logInMsg:action.payload.msg, token:action.payload.tkn};
        case ACTION_TYPES.G_LOGGED_IN:
            console.log(action)
            return {...state, logInMsg:action.payload.msg, token:action.payload.tkn};
        case ACTION_TYPES.LOGGED_OUT:
            return {...state, token:"" };
        default:
            return state;
    }
}