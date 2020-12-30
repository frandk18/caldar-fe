import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
} from "../types/actionTypes";
import {
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_REJECTED,
} from "../types/actionTypes";
import { EDIT_TECHNICIAN } from "../types/actionTypes";

const URL = "http://localhost:4000/api/technician";

export const getTechniciansFetching = () => ({
  type: GET_TECHNICIANS_FETCHING,
});

export const getTechniciansFulfilled = (payload) => ({
  type: GET_TECHNICIANS_FULFILLED,
  payload,
});

export const getTechniciansRejected = () => ({
  type: GET_TECHNICIANS_REJECTED,
});

export const getTechnicians = () => (dispatch) => {
  dispatch(getTechniciansFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getTechniciansFulfilled(response));
    })
    .catch(() => {
      dispatch(getTechniciansRejected());
    });
};

export const deleteTechnicianFetching = () => ({
  type: DELETE_TECHNICIAN_FETCHING,
});

export const deleteTechnicianFulfilled = (payload) => ({
  type: DELETE_TECHNICIAN_FULFILLED,
  payload,
});

export const deleteTechnicianRejected = () => ({
  type: DELETE_TECHNICIAN_REJECTED,
});

export const deleteTechnician = (id) => (dispatch) => {
  dispatch(deleteTechnicianFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteTechnicianFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteTechnicianRejected());
    });
};
/*

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
*/
