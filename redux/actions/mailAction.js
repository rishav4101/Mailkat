export const ACTION_TYPES = {
    SEND_MAIL: "SEND_MAIL",
    MAIL_SENT: "MAIL_SENT",
    GET_SCHEDULE: "GET_SCHEDULE",
    RECIEVED_SCHEDULE: "RECIEVED_SCHEDULE",
    GET_HISTORY: "GET_HISTORY",
    RECIEVED_HISTORY: "RECIEVED_HISTORY",
    STOP_SCHEDULE: "STOP_SCHEDULE",
    SCHEDULE_STOPPED: "SCHEDULE_STOPPED"
  };
  
  export const sendMailAction = (rsp) => ({
    type: ACTION_TYPES.MAIL_SENT,
    payload: rsp,
  });

  export const getScheduleAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_SCHEDULE,
    payload: rsp,
  });

  export const getHistoryAction = (rsp) => ({
    type: ACTION_TYPES.RECIEVED_SCHEDULE,
    payload: rsp,
  });

  export const stopScheduleAction = (rsp) => ({
    type: ACTION_TYPES.SCHEDULE_STOPPED,
    payload: rsp,
  });
  
  export default {
    sendMailAction,
    getScheduleAction,
    getHistoryAction,
    stopScheduleAction
  };
  