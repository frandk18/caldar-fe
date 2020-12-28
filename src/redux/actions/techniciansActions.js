import DELETE_TECHNICIAN from "../types/actionTypes";

export const deleteTechnician = (id) => ({
  type: DELETE_TECHNICIAN,
  id,
});
