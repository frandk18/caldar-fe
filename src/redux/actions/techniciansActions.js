import { ACTIONS_TYPES } from "../types/actionTypes";

export const deleteTechnician = (id) => {
  return {
    type: ACTIONS_TYPES.DELETE_TECHNICIAN,
    id,
  };
};

export const addTechnician = (newOne) => {
  return {
    type: ACTIONS_TYPES.ADD_TECHNICIAN,
    newOne,
  };
};

export const editTechnician = (newOne) => {
  return {
    type: ACTIONS_TYPES.EDIT_TECHNICIAN,
    newOne,
  };
};
