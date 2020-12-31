/*import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECHNICIAN_FETCHING,
  ADD_TECHNICIAN_FULFILLED,
  ADD_TECHNICIAN_REJECTED,
  EDIT_TECHNICIAN_FETCHING,
  EDIT_TECHNICIAN_FULFILLED,
  EDIT_TECHNICIAN_REJECTED,
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_REJECTED,
} from "../types/actionTypes";*/

import { ACTIONS_TYPES } from "../types/actionTypes";

const URL = "http://localhost:4000/api/technician";

// GET

export const getTechniciansFetching = () => ({
  type: ACTIONS_TYPES.GET_TECHNICIANS_FETCHING,
});

export const getTechniciansFulfilled = (payload) => ({
  type: ACTIONS_TYPES.GET_TECHNICIANS_FULFILLED,
  payload,
});

export const getTechniciansRejected = () => ({
  type: ACTIONS_TYPES.GET_TECHNICIANS_REJECTED,
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

// ADD

export const addTechnicianFetching = () => ({
  type: ACTIONS_TYPES.ADD_TECHNICIAN_FETCHING,
});

export const addTechnicianFulfilled = (payload) => ({
  type: ACTIONS_TYPES.ADD_TECHNICIAN_FULFILLED,
  payload,
});

export const addTechnicianRejected = () => ({
  type: ACTIONS_TYPES.ADD_TECHNICIAN_REJECTED,
});

export const addTechnician = (newOne) => (dispatch) => {
  dispatch(addTechnicianFetching());
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOne),
  })
    .then((data) => {
      data.json();
      if (!data.ok) throw Error;
      return dispatch(addTechnicianFulfilled(newOne));
    })
    .catch((err) => {
      return dispatch(addTechnicianRejected());
    });
};

// EDIT

export const editTechnicianFetching = () => ({
  type: ACTIONS_TYPES.EDIT_TECHNICIAN_FETCHING,
});

export const editTechnicianFulfilled = (payload, newOne) => ({
  type: ACTIONS_TYPES.EDIT_TECHNICIAN_FULFILLED,
  payload,
  newOne,
});

export const editTechnicianRejected = () => ({
  type: ACTIONS_TYPES.EDIT_TECHNICIAN_REJECTED,
});

export const editTechnician = (newOne, id) => (dispatch) => {
  dispatch(editTechnicianFetching());
  fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOne),
  })
    .then((data) => {
      data.json();
      if (!data.ok) throw Error;
      return dispatch(editTechnicianFulfilled(newOne));
    })
    .catch((err) => {
      return dispatch(editTechnicianRejected());
    });
};

// DELETE

export const deleteTechnicianFetching = () => ({
  type: ACTIONS_TYPES.DELETE_TECHNICIAN_FETCHING,
});

export const deleteTechnicianFulfilled = (payload) => ({
  type: ACTIONS_TYPES.DELETE_TECHNICIAN_FULFILLED,
  payload,
});

export const deleteTechnicianRejected = () => ({
  type: ACTIONS_TYPES.DELETE_TECHNICIAN_REJECTED,
});

export const deleteTechnician = (id) => (dispatch) => {
  dispatch(deleteTechnicianFetching());
  fetch(`${URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw Error;
      return dispatch(deleteTechnicianFulfilled(id));
    })
    .catch((error) => {
      console.log(error);
      return dispatch(deleteTechnicianRejected());
    });
};
