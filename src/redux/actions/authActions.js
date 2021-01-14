import { ACTIONS_TYPES } from "../types/actionTypes";
import Firebase from "../../firebase";

const loginFetching = () => {
  return {
    type: ACTIONS_TYPES.LOGIN_FETCHING,
  };
};

const loginFullfilled = () => {
  console.log("FULFILLED");
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
  console.log(credentials.email);
  console.log(credentials.password);
  dispatch(loginFetching());

  return Firebase.auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (response) => {
      const token = await response.user.getIdToken();
      localStorage.setItem("token", token);
      return dispatch(loginFullfilled());
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

const logoutFullfilled = (data) => {
  return {
    type: ACTIONS_TYPES.LOGOUT_FULLFILLED,
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
      return dispatch(logoutFullfilled());
    })
    .catch(() => {
      return dispatch(logoutRejected());
    });
};
