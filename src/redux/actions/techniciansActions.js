import { DELETE_TECHNICIAN } from "../types/actionTypes";
import { ADD_TECHNICIAN } from "../types/actionTypes";
import { EDIT_TECHNICIAN } from "../types/actionTypes";

export const deleteTechnician = (id) => {
  return {
    type: DELETE_TECHNICIAN,
    id,
  };
};

export const addTechnician = (newOne) => {
  return {
    type: ADD_TECHNICIAN,
    newOne,
  };
};

export const editTechnician = (newOne) => {
  return {
    type: EDIT_TECHNICIAN,
    newOne,
  };
};
