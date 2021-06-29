export const ACTION_TYPES = {
    SIGN_UP:"SIGN_UP",
    SIGNED_UP:"SIGNED_UP",
    SIGN_UP_FAILED: "SIGN_UP_FAILED",

    LOG_IN: "LOG_IN",
    LOGGED_IN:"LOGGED_IN",
    LOG_IN_FAILED: "LOG_IN_FAILED",

    LOG_OUT:"LOG_OUT",
    LOGGED_OUT:"LOGGED_OUT", 

    G_LOG_IN: "G_LOG_IN",
    G_LOGGED_IN: "G_LOGGED_IN",
    G_LOG_IN_FAILED: "G_LOG_IN_FAILED"
  };
  
  export const signUpAction = (rsp) => ({
    type: ACTION_TYPES.SIGNED_UP,
    payload: rsp,
  });
  export const signUpActionFailed = (rsp) => ({
    type: ACTION_TYPES.SIGN_UP_FAILED,
    payload: rsp,
  });

  export const logInAction = (rsp) => ({
    type: ACTION_TYPES.LOGGED_IN,
    payload: rsp,
  });
  export const logInActionFailed = (rsp) => ({
    type: ACTION_TYPES.LOG_IN_FAILED,
    payload: rsp,
  });

  export const gLogInAction = (rsp) => ({
    type: ACTION_TYPES.G_LOGGED_IN,
    payload: rsp,
  });
  export const gLogInActionFailed = (rsp) => ({
    type: ACTION_TYPES.G_LOG_IN_FAILED,
    payload: rsp,
  });

  export const logOutAction = () => ({
    type: ACTION_TYPES.LOGGED_OUT,
    payload: {}
  });
  
  export default {
    signUpAction,
    signUpActionFailed,
    logInAction,
    logInActionFailed,
    logOutAction,
    gLogInAction,
    gLogInActionFailed,
  };