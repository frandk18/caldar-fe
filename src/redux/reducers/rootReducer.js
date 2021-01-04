import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";
import buildingsReducer from "./buildingsReducer";
import companiesReducer from "./companiesReducer";
import boilersReducer from "./boilersReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
  buildings: buildingsReducer,
  companies: companiesReducer,
  boilers: boilersReducer,
});

export default rootReducer;
