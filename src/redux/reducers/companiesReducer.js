import { ACTIONS_TYPES } from "../types/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: false,
  refresh: true,
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_COMPANIES_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_COMPANIES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.GET_COMPANIES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.ADD_COMPANY_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.ADD_COMPANY_FULFILLED:
      return {
        ...state,
        refresh: true,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    case ACTIONS_TYPES.ADD_COMPANY_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.EDIT_COMPANY_FETCHING:
      return {
        ...state,
        isLoading: true,
        refresh: false,
      };
    case ACTIONS_TYPES.EDIT_COMPANY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        refresh: true,
        data: state.data.map((company) => {
          if (company._id === action.payload) {
            company = action.newOne;
          }
          return company;
        }),
      };
    case ACTIONS_TYPES.EDIT_COMPANY_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case ACTIONS_TYPES.DELETE_COMPANY_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.DELETE_COMPANY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((company) => company._id !== action.payload),
      };
    case ACTIONS_TYPES.DELETE_COMPANY_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default companiesReducer;
