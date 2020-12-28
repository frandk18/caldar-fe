//import {DELETE_TECHNICIAN} from "../actions/techniciansActions.js";
import technicians from "../../mocks/technician.json";

const initialState = {
  data: technicians,
};
console.log(initialState);
const techniciansReducer = (state = initialState, action) => {
  /*switch (action.type) {
        case DELETE_TECHNICIAN:
            return {
                ...state,
                list: state.list.filter(technician => technician._id.$oid === action.id)
            };
        default: 
            return state;
    };*/
  return state;
};

export default techniciansReducer;
