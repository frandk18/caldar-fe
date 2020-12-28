import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
});

export default rootReducer;
