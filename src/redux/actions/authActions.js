import { ACTIONS_TYPES } from "../types/actionTypes";
import Firebase from "../../firebase";

const loginFetching = () => {
  return {
    type: ACTIONS_TYPES.LOGIN_FETCHING,
  };
};

const loginFulfilled = () => {
  return {
    type: ACTIONS_TYPES.LOGIN_FULFILLED,
  };
};

const loginRejected = () => {
  return {
    type: ACTIONS_TYPES.LOGIN_REJECTED,
  };
};

export const login = (credentials) => (dispatch) => {
  dispatch(loginFetching());
  return Firebase.auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (response) => {
      const token = await response.user.getIdToken();
      localStorage.setItem("token", token);
      return dispatch(loginFulfilled());
    })
    .catch(() => {
      return dispatch(loginRejected());
    });
};

export const setAuthentication = () => {
  return {
    type: ACTIONS_TYPES.SET_AUTHENTICATION,
  };
};

const logoutFetching = () => {
  return {
    type: ACTIONS_TYPES.LOGOUT_FETCHING,
  };
};

const logoutFulfilled = (data) => {
  return {
    type: ACTIONS_TYPES.LOGOUT_FULFILLED,
  };
};

const logoutRejected = () => {
  return {
    type: ACTIONS_TYPES.LOGOUT_REJECTED,
  };
};

export const logout = () => (dispatch) => {
  dispatch(logoutFetching());
  return Firebase.auth()
    .signOut()
    .then(() => {
      localStorage.removeItem("token");
      return dispatch(logoutFulfilled());
    })
    .catch(() => {
      return dispatch(logoutRejected());
    });
};
