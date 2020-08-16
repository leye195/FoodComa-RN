import { handleActions, createAction } from "redux-actions";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const CHECK_USER = "CHECK_USER";

export const changeLoginStatus = createAction(LOGIN);
export const checkUser = createAction(CHECK_USER);

const initState = {
  loggedIn: false,
  user: {
    _id: "",
    email: "",
    image: null,
  },
};

export default handleActions(
  {
    [LOGIN]: (state, action) => {
      const { payload } = action;
      if (payload.loggedIn) {
        return {
          loggedIn: true,
        };
      } else {
        return {
          loggedIn: false,
        };
      }
    },
    [CHECK_USER]: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        user: {
          _id: payload._id,
          email: payload.email,
          image: payload.image,
        },
      };
    },
  },
  initState
);
