import { DELETE_BUILDING } from "../types/actionTypes";
import { ADD_BUILDING } from "../types/actionTypes";
import { EDIT_BUILDING } from "../types/actionTypes";

export const deleteBuilding = (id) => {
  return {
    type: DELETE_BUILDING,
    id,
  };
};

export const addBuilding = (newOne) => {
  return {
    type: ADD_BUILDING,
    newOne,
  };
};

export const editBuilding = (newOne) => {
  return {
    type: EDIT_BUILDING,
    newOne,
  };
};
