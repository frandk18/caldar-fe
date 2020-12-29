import { DELETE_TECHNICIAN } from "../types/actionTypes";

export const deleteTechnician = (id) => {
  console.log("entre aca?");
  return {
    type: DELETE_TECHNICIAN,
    id,
  };
};
