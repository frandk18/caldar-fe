import { ACTIONS_TYPES } from "../types/actionTypes";
const initialState = {
  data: [],
  isLoading: true,
  error: false,
  refresh: true,
};

const boilerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_BOILERTYPES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_BOILERTYPES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.GET_BOILERTYPES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ACTIONS_TYPES.ADD_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.ADD_BOILERTYPE_FULFILLED:
      return {
        ...state,
        refresh: true,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case ACTIONS_TYPES.ADD_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ACTIONS_TYPES.EDIT_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.EDIT_BOILERTYPE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        refresh: true,
        data: state.data.map((boilerT) => {
          if (boilerT._id === action.payload) {
            boilerT = action.newOne;
          }
          return boilerT;
        }),
      };
    case ACTIONS_TYPES.EDIT_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ACTIONS_TYPES.DELETE_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.DELETE_BOILERTYPE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((boilerT) => boilerT._id !== action.payload),
      };
    case ACTIONS_TYPES.DELETE_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
export default boilerTypesReducer;
