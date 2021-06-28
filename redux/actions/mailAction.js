export const ACTION_TYPES = {
    SEND_MAIL: "SEND_MAIL",
    MAIL_SENT: "MAIL_SENT",
    SEND_MAIL_FAILED: "SEND_MAIL_FAILED",

    GET_SCHEDULE: "GET_SCHEDULE",
    RECIEVED_SCHEDULE: "RECIEVED_SCHEDULE",
    GET_SCHEDULE_FAILED: "GET_SCHEDULE_FAILED",

    GET_HISTORY: "GET_HISTORY",
    RECIEVED_HISTORY: "RECIEVED_HISTORY",
    GET_HISTORY_FAILED: "GET_HISTORY_FAILED",

    STOP_SCHEDULE: "STOP_SCHEDULE",
    SCHEDULE_STOPPED: "SCHEDULE_STOPPED",
    STOP_SCHEDULE_FAILED: "STOP_SCHEDULE_FAILED",
  };
  
  export const sendMailAction = (rsp) => ({
    type: ACTION_TYPES.MAIL_SENT,
    payload: rsp,
  });
  export const sendMailActionFailed = (rsp) => ({
    type: ACTION_TYPES.SEND_MAIL_FAILED,
    payload: rsp,
  });

  export const getScheduleAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_SCHEDULE,
    payload: rsp,
  });
  export const getScheduleActionFailed = (rsp) => ({
    type: ACTION_TYPES.GET_SCHEDULE_FAILED,
    payload: rsp,
  });

  export const getHistoryAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_HISTORY,
    payload: rsp,
  });
  export const getHistoryActionFailed = (rsp) => ({
    type: ACTION_TYPES.GET_HISTORY_FAILED,
    payload: rsp,
  });
  
  export const stopScheduleAction = (rsp) => ({
    type: ACTION_TYPES.SCHEDULE_STOPPED,
    payload: rsp,
  });
  export const stopScheduleActionFailed = (rsp) => ({
    type: ACTION_TYPES.STOP_SCHEDULE_FAILED,
    payload: rsp,
  });
  
  export default {
    sendMailAction,
    sendMailActionFailed,
    getScheduleAction,
    getScheduleActionFailed,
    getHistoryAction,
    getHistoryActionFailed,
    stopScheduleAction,
    stopScheduleActionFailed,
  };
  