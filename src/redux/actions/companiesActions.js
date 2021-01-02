import { DELETE_COMPANY } from "../types/actionTypes";
import { ADD_COMPANY } from "../types/actionTypes";
import { EDIT_COMPANY } from "../types/actionTypes";

export const deleteCompany = (id) => {
  return {
    type: DELETE_COMPANY,
    id,
  };
};

export const addCompany = (newOne) => {
  return {
    type: ADD_COMPANY,
    newOne,
  };
};

export const editCompany = (newOne) => {
  return {
    type: EDIT_COMPANY,
    newOne,
  };
};