import {
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
} from "../types/actionTypes";

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

export const addTechnicianFetching = () => ({
  type: ADD_TECHNICIAN_FETCHING,
});

export const addTechnicianFulfilled = (payload) => ({
  type: ADD_TECHNICIAN_FULFILLED,
  payload,
});

export const addTechnicianRejected = () => ({
  type: ADD_TECHNICIAN_REJECTED,
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

export const editTechnicianFetching = () => ({
  type: EDIT_TECHNICIAN_FETCHING,
});

export const editTechnicianFulfilled = (payload, newOne) => ({
  type: EDIT_TECHNICIAN_FULFILLED,
  payload,
  newOne,
});

export const editTechnicianRejected = () => ({
  type: EDIT_TECHNICIAN_REJECTED,
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
