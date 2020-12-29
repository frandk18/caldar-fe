import {
  DELETE_BUILDING,
  ADD_BUILDING,
  EDIT_BUILDING,
} from "../types/actionTypes";
import buildings from "../../mocks/building.json";

const initialState = {
  data: buildings,
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BUILDING:
      return {
        ...state,
        data: state.data.filter((building) => building._id.$oid !== action.id),
      };
    case ADD_BUILDING:
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
      };
    default:
      return state;
  }
};

export default buildingsReducer;
