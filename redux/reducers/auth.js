import { ACTION_TYPES } from "../actions/authAction";

const initialState = {
    signUpMsg: undefined,
    signUpError: undefined,

    logInMsg: undefined,
    logInError: undefined,

    token: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SIGNED_UP:
            console.log(action.payload)
            return {...state, signUpMsg:action.payload.message, token:action.payload.token, signUpError:undefined};
        case ACTION_TYPES.SIGN_UP_FAILED:
            console.log(action.payload)
            return {...state, signUpMsg:undefined, signUpError:action.payload.error, token:undefined};

        case ACTION_TYPES.LOGGED_IN:
            console.log(action)
            return {...state, logInMsg:action.payload.message, token:action.payload.token, logInError:undefined};
        case ACTION_TYPES.LOG_IN_FAILED:
            console.log(action)
            return {...state, logInMsg:undefined, logInError:action.payload.error, token:undefined};

        case ACTION_TYPES.G_LOGGED_IN:
            console.log(action)
            return {...state, logInMsg:action.payload.message, token:action.payload.token, logInError:undefined};
        case ACTION_TYPES.G_LOG_IN_FAILED:
            console.log(action)
            return {...state, logInMsg:undefined, logInError:action.payload.error, token:undefined};

        case ACTION_TYPES.LOGGED_OUT:
            return {...state, token:undefined };

        default:
            return state;
    }
}