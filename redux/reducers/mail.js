import { ACTION_TYPES } from "../actions/mailAction";

const initialState = {
    mailSentMsg: "",
    history: [],
    schedule: [],
    stopScheduleMsg: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.MAIL_SENT:
            console.log(action)
            return {...state, mailSentMsg:action.payload};
        case ACTION_TYPES.RECIEVED_HISTORY:
            console.log(action)
            return {...state, history:action.payload};
        case ACTION_TYPES.RECIEVED_SCHEDULE:
            console.log(action)
            return {...state, schedule:action.payload};
        case ACTION_TYPES.SCHEDULE_STOPPED:
            console.log(action)
            return {...state, stopScheduleMsg:action.payload};
        default:
            return state;
    }
}