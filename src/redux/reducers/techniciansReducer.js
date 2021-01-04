/*import {
  ADD_TECHNICIAN_FETCHING,
  ADD_TECHNICIAN_FULFILLED,
  ADD_TECHNICIAN_REJECTED,
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_REJECTED,
  EDIT_TECHNICIAN,
  EDIT_TECHNICIAN_FETCHING,
  EDIT_TECHNICIAN_FULFILLED,
  EDIT_TECHNICIAN_REJECTED,
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
} from "../types/actionTypes";*/

import { ACTIONS_TYPES } from "../types/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
  refresh: true,
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_TECHNICIANS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_TECHNICIANS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.GET_TECHNICIANS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.ADD_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.ADD_TECHNICIAN_FULFILLED:
      return {
        ...state,
        refresh: true,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case ACTIONS_TYPES.ADD_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.EDIT_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.EDIT_TECHNICIAN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        refresh: true,
        data: state.data.map((technician) => {
          if (technician._id === action.payload) {
            technician = action.newOne;
          }
          return technician;
        }),
      };
    case ACTIONS_TYPES.EDIT_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.DELETE_TECHNICIAN_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.DELETE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          (technician) => technician._id !== action.payload
        ),
      };
    case ACTIONS_TYPES.DELETE_TECHNICIAN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default techniciansReducer;
