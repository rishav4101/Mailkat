export const ACTION_TYPES = {
    SIGN_UP:"SIGN_UP",
    SIGNED_UP:"SIGNED_UP",
    LOG_IN: "LOG_IN",
    LOGGED_IN:"LOGGED_IN"
  };
  
  export const signUpAction = (rsp) => ({
    type: ACTION_TYPES.SIGNED_UP,
    payload: rsp,
  });

  export const logInAction = (rsp) => ({
    type: ACTION_TYPES.LOGGED_IN,
    payload: rsp,
  });
  
  export default {
    signUpAction,
    logInAction,
  };