import {
  ADD_BOILERTYPE_FETCHING,
  ADD_BOILERTYPE_FULFILLED,
  ADD_BOILERTYPE_REJECTED,
  DELETE_BOILERTYPE_FETCHING,
  DELETE_BOILERTYPE_FULFILLED,
  DELETE_BOILERTYPE_REJECTED,
  EDIT_BOILERTYPE_FETCHING,
  EDIT_BOILERTYPE_FULFILLED,
  EDIT_BOILERTYPE_REJECTED,
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
} from "../types/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
  refresh: true,
};

const boilerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERTYPES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOILERTYPES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_BOILERTYPES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ADD_BOILERTYPE_FULFILLED:
      return {
        ...state,
        refresh: true,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case ADD_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case EDIT_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case EDIT_BOILERTYPE_FULFILLED:
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
    case EDIT_BOILERTYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_BOILERTYPE_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BOILERTYPE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          (boilerT) => boilerT._id !== action.payload
        ),
      };
    case DELETE_BOILERTYPE_REJECTED:
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
