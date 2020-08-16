import { handleActions, createAction } from "redux-actions";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const changeLoginStatus = createAction(LOGIN);

const initState = {
  loggedIn: false,
};

export default handleActions(
  {
    [LOGIN]: (state, action) => {
      const { payload } = action;
      return {
        loggedIn: payload.loggedIn,
      };
    },
  },
  initState
);
