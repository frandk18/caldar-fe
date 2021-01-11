import { ACTIONS_TYPES } from "../types/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  authenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.LOGIN_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.LOGIN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
      };
    case ACTIONS_TYPES.LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ACTIONS_TYPES.LOGOUT_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.LOGOUT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
      };
    case ACTIONS_TYPES.LOGOUT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default authReducer;
