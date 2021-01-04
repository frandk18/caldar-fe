import { ACTIONS_TYPES } from "../types/actionTypes";

const URL = "http://localhost:4000/api/boiler";

// GET

export const getBoilersFetching = () => ({
  type: ACTIONS_TYPES.GET_BOILERS_FETCHING,
});

export const getBoilersFulfilled = (payload) => ({
  type: ACTIONS_TYPES.GET_BOILERS_FULFILLED,
  payload,
});

export const getBoilersRejected = () => ({
  type: ACTIONS_TYPES.GET_BOILERS_REJECTED,
});

export const getBoilers = () => (dispatch) => {
  dispatch(getBoilersFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilersFulfilled(response));
    })
    .catch(() => {
      dispatch(getBoilersRejected());
    });
};

// ADD

export const addBoilerFetching = () => ({
  type: ACTIONS_TYPES.ADD_BOILER_FETCHING,
});

export const addBoilerFulfilled = (payload) => ({
  type: ACTIONS_TYPES.ADD_BOILER_FULFILLED,
  payload,
});

export const addBoilerRejected = () => ({
  type: ACTIONS_TYPES.ADD_BOILER_REJECTED,
});

export const addBoiler = (newOne) => (dispatch) => {
  console.log(newOne)
  dispatch(addBoilerFetching());
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
      return dispatch(addBoilerFulfilled(newOne));
    })
    .catch(() => {
      return dispatch(addBoilerRejected());
    });
};

// EDIT

export const editBoilerFetching = () => ({
  type: ACTIONS_TYPES.EDIT_BOILER_FETCHING,
});

export const editBoilerFulfilled = (payload, newOne) => ({
  type: ACTIONS_TYPES.EDIT_BOILER_FULFILLED,
  payload,
  newOne,
});

export const editBoilerRejected = () => ({
  type: ACTIONS_TYPES.EDIT_BOILER_REJECTED,
});

export const editBoiler = (newOne, id) => (dispatch) => {
  dispatch(editBoilerFetching());
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
      return dispatch(editBoilerFulfilled(newOne));
    })
    .catch(() => {
      return dispatch(editBoilerRejected());
    });
};

// DELETE

export const deleteBoilerFetching = () => ({
  type: ACTIONS_TYPES.DELETE_BOILER_FETCHING,
});

export const deleteBoilerFulfilled = (payload) => ({
  type: ACTIONS_TYPES.DELETE_BOILER_FULFILLED,
  payload,
});

export const deleteBoilerRejected = () => ({
  type: ACTIONS_TYPES.DELETE_BOILER_REJECTED,
});

export const deleteBoiler = (id) => (dispatch) => {
  dispatch(deleteBoilerFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBoilerFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteBoilerRejected());
    });
};