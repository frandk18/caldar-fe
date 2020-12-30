import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";
import buildingsReducer from "./buildingsReducer";
import boilerTypeReducer from "./boilerTypeReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
  buildings: buildingsReducer,
  boilerType: boilerTypeReducer,
});

export default rootReducer;
