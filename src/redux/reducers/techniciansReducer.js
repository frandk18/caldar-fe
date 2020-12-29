import {
  ADD_TECHNICIAN,
  DELETE_TECHNICIAN,
  EDIT_TECHNICIAN,
} from "../types/actionTypes";
import technicians from "../../mocks/technician.json";

const initialState = {
  data: technicians,
};

const techniciansReducer = (state = initialState, action) => {
  console.log(action.newOne);
  switch (action.type) {
    case DELETE_TECHNICIAN:
      return {
        ...state,
        data: state.data.filter(
          (technician) => technician._id.$oid !== action.id
        ),
      };
    case ADD_TECHNICIAN:
      return {
        ...state,
        data: [...state.data, action.newOne],
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
