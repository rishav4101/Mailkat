import { ACTION_TYPES } from "../actions/mailAction";

const initialState = {
    mailSentMsg: undefined,
    mailSentError: undefined,

    history: [],
    historyError: undefined,

    schedule: [],
    scheduleError: undefined,
    
    stopScheduleMsg: undefined,
    stopScheduleError: undefined,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.MAIL_SENT:
            console.log(action)
            return {...state, mailSentMsg:action.payload, mailSentError:undefined};
        case ACTION_TYPES.SEND_MAIL_FAILED:
            console.log(action)
            return {...state, mailSentError:action.payload};

        case ACTION_TYPES.RECIEVED_HISTORY:
            console.log(action)
            return {...state, history:action.payload, historyError:undefined};
        case ACTION_TYPES.GET_HISTORY_FAILED:
            console.log(action)
            return {...state, historyError:action.payload};

        case ACTION_TYPES.RECIEVED_SCHEDULE:
            console.log(action)
            return {...state, schedule:action.payload, scheduleError:undefined};
        case ACTION_TYPES.GET_SCHEDULE_FAILED:
            console.log(action)
            return {...state, scheduleError:action.payload};    

        case ACTION_TYPES.SCHEDULE_STOPPED:
            console.log(action)
            return {...state, stopScheduleMsg:action.payload, stopScheduleError:undefined};
        case ACTION_TYPES.STOP_SCHEDULE_FAILED:
            console.log(action)
            return {...state, stopScheduleError:action.payload};

        default:
            return state;
    }
}