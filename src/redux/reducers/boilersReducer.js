import { ACTIONS_TYPES } from "../types/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
  refresh: true,
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_BOILERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_BOILERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.GET_BOILERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.ADD_BOILER_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.ADD_BOILER_FULFILLED:
      return {
        ...state,
        refresh: true,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case ACTIONS_TYPES.ADD_BOILER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.EDIT_BOILER_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.EDIT_BOILER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        refresh: true,
        data: state.data.map((boiler) => {
          if (boiler._id === action.payload) {
            boiler = action.newOne;
          }
          return boiler;
        }),
      };
    case ACTIONS_TYPES.EDIT_BOILER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.DELETE_BOILER_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.DELETE_BOILER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((boiler) => boiler._id !== action.payload),
      };
    case ACTIONS_TYPES.DELETE_BOILER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default boilersReducer;
