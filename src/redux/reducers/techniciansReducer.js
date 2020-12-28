import { DELETE_TECHNICIAN } from "../actions/techniciansActions.js";
import technicians from "../../mocks/technician.json";

const initialState = {
  data: technicians,
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TECHNICIAN:
      return {
        ...state,
        //data: state.data.filter((technician) => technician._id.$oid !== action.id)
        data: state.data.map((technician) => {
          return technician._id.$oid !== action.id
            ? {
                technician,
              }
            : null;
        }),
      };
    default:
      return state;
  }
};

export default techniciansReducer;
