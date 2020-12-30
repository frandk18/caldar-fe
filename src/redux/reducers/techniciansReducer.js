import {
  ADD_TECHNICIAN,
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_REJECTED,
  EDIT_TECHNICIAN,
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
} from "../types/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNICIANS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TECHNICIANS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_TECHNICIANS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          (technician) => technician._id !== action.payload
        ),
      };
    case DELETE_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case EDIT_TECHNICIAN:
      return {
        ...state,
        data: state.data.map((technician) => {
          if (technician._id.$oid === action.newOne._id.$oid) {
            technician = action.newOne;
          }
          return technician;
        }),
      };
    default:
      return state;
  }
};

export default techniciansReducer;
/*
return {
  ...state,
  data: [...state.data, action.newOne],
};*/
