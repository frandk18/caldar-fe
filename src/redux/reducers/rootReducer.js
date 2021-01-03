import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";
import buildingsReducer from "./buildingsReducer";
import boilerTypesReducer from "./boilerTypesReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
  buildings: buildingsReducer,
  boilerType: boilerTypesReducer,
});

export default rootReducer;
