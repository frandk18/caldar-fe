import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";
import buildingsReducer from "./buildingsReducer";
import companiesReducer from "./companiesReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
  buildings: buildingsReducer,
  companies: companiesReducer,
});

export default rootReducer;
