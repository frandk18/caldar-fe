import { combineReducers } from "redux";
import techniciansReducer from "./techniciansReducer";
import buildingsReducer from "./buildingsReducer";
import companiesReducer from "./companiesReducer";
import boilersReducer from "./boilersReducer";
import boilerTypesReducer from "./boilerTypesReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  technicians: techniciansReducer,
  buildings: buildingsReducer,
  companies: companiesReducer,
  boilers: boilersReducer,
  boilerTypes: boilerTypesReducer,
  modal: modalReducer,
});

export default rootReducer;
