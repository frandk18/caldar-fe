import { ACTIONS_TYPES } from "../types/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
  refresh: true,
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_BUILDINGS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_BUILDINGS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.GET_BUILDINGS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.ADD_BUILDING_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.ADD_BUILDING_FULFILLED:
      return {
        ...state,
        refresh: true,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case ACTIONS_TYPES.ADD_BUILDING_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.EDIT_BUILDING_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.EDIT_BUILDING_FULFILLED:
      return {
        ...state,
        isLoading: false,
        refresh: true,
        data: state.data.map((building) => {
          if (building._id === action.payload) {
            building = action.newOne;
          }
          return building;
        }),
      };
    case ACTIONS_TYPES.EDIT_BUILDING_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.DELETE_BUILDING_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.DELETE_BUILDING_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((building) => building._id !== action.payload),
      };
    case ACTIONS_TYPES.DELETE_BUILDING_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default buildingsReducer;
