import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";
import buildingsReducer from "./buildingsReducer";
import boilerTypesReducer from "./boilerTypesReducer";
import companiesReducer from "./companiesReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
  buildings: buildingsReducer,
  boilerType: boilerTypesReducer,
  companies: companiesReducer,
});

export default rootReducer;
