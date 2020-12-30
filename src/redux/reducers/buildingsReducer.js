import { ACTIONS_TYPES } from "../types/actionTypes";
//import buildings from "../../mocks/building.json";

const initialState = {
  //data: buildings,
  data: [],
  isLoading: true,
  error: false,
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
    /*case ADD_BUILDING:
      return {
        ...state,
        data: [...state.data, action.newOne],
      };
    case EDIT_BUILDING:
      return {
        ...state,
        data: state.data.map((building) => {
          if (building._id.$oid === action.newOne._id.$oid) {
            building = action.newOne;
          }
          return building;
        }),
      };*/
    default:
      return state;
  }
};

export default buildingsReducer;
