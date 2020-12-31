import { ACTIONS_TYPES } from "../types/actionTypes";
import technicians from "../../mocks/technician.json";

const initialState = {
  data: technicians,
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.DELETE_TECHNICIAN:
      return {
        ...state,
        data: state.data.filter(
          (technician) => technician._id.$oid !== action.id
        ),
      };
    case ACTIONS_TYPES.ADD_TECHNICIAN:
      return {
        ...state,
        data: [...state.data, action.newOne],
      };
    case ACTIONS_TYPES.EDIT_TECHNICIAN:
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
