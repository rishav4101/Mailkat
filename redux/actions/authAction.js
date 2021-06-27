export const ACTION_TYPES = {
    SIGN_UP:"SIGN_UP",
    SIGNED_UP:"SIGNED_UP",
    LOG_IN: "LOG_IN",
    LOGGED_IN:"LOGGED_IN",
    LOG_OUT:"LOG_OUT",
    LOGGED_OUT:"LOGGED_OUT", 
  };
  
  export const signUpAction = (rsp) => ({
    type: ACTION_TYPES.SIGNED_UP,
    payload: {
        msg: rsp.message,
        tkn: rsp.token
    },
  });

  export const logInAction = (rsp) => ({
    type: ACTION_TYPES.LOGGED_IN,
    payload: {
        msg: rsp.message,
        tkn: rsp.token
    },
  });

  export const logOutAction = () => ({
    type: ACTION_TYPES.LOGGED_OUT,
    payload: {}
  });
  
  export default {
    signUpAction,
    logInAction,
    logOutAction
  };