import {
  DELETE_BOILERTYPE,
  ADD_BOILERTYPE,
  EDIT_BOILERTYPE,
} from "../types/actionTypes";
import boilerType from "../../mocks/boiler-type.json";

const initialState = {
  data: boilerType,
};

const boilerTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOILERTYPE:
      return {
        ...state,
        data: state.data.filter((boilerType) => boilerType._id.$oid !== action.id),
      };
    case ADD_BOILERTYPE:
      return {
        ...state,
        data: [...state.data, action.newOne],
      };
    case EDIT_BOILERTYPE:
      return {
        ...state,
        data: state.data.map((boilerType) => {
          if (boilerType._id.$oid === action.newOne._id.$oid) {
            boilerType = action.newOne;
          }
          return boilerType;
        }),
      };
    default:
      return state;
  }
};

export default boilerTypeReducer;
