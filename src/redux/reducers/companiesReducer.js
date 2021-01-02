import {
    ADD_COMPANY,
    DELETE_COMPANY,
    EDIT_COMPANY,
  } from "../types/actionTypes";
  import companies from "../../mocks/company.json";

  const initialState = {
    data: companies,
  };

  const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_COMPANY:
        return {
          ...state,
          data: state.data.filter(
            (company) => company._id.$oid !== action.id
          ),
        };
      case ADD_COMPANY:
        return {
          ...state,
          data: [...state.data, action.newOne],
        };
      case EDIT_COMPANY:
        return {
          ...state,
          data: state.data.map((company) => {
            if (company._id.$oid === action.newOne._id.$oid) {
              company = action.newOne;
            }
            return company;
          }),
        };
      default:
        return state;
    }
  };

  export default companiesReducer;