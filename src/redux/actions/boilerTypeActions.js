import { DELETE_BOILERTYPE} from "../types/actionTypes";
import { ADD_BOILERTYPE } from "../types/actionTypes";
import { EDIT_BOILERTYPE } from "../types/actionTypes";

export const deleteBoilerType = (id) => {
  return {
    type: DELETE_BOILERTYPE,
    id,
  };
};

export const addBoilerType = (newOne) => {
  return {
    type: ADD_BOILERTYPE,
    newOne,
  };
};

export const editBoilerType = (newOne) => {
  return {
    type: EDIT_BOILERTYPE,
    newOne,
  };
};
