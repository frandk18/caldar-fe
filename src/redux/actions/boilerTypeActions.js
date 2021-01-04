/*import {
  ACTIONS_TYPES.ADD_BOILERTYPE_FETCHING,
  ACTIONS_TYPES.ADD_BOILERTYPE_FULFILLED,
  ACTIONS_TYPES.ADD_BOILERTYPE_REJECTED,
  ACTIONS_TYPES.DELETE_BOILERTYPE_FETCHING,
  ACTIONS_TYPES.DELETE_BOILERTYPE_FULFILLED,
  ACTIONS_TYPES.DELETE_BOILERTYPE_REJECTED,
  ACTIONS_TYPES.EDIT_BOILERTYPE_FETCHING,
  ACTIONS_TYPES.EDIT_BOILERTYPE_FULFILLED,
  ACTIONS_TYPES.EDIT_BOILERTYPE_REJECTED,
  ACTIONS_TYPES.GET_BOILERTYPES_FETCHING,
  ACTIONS_TYPES.GET_BOILERTYPES_FULFILLED,
  ACTIONS_TYPES.GET_BOILERTYPES_REJECTED,
} from "../types/actionTypes";*/

import { ACTIONS_TYPES } from "../types/actionTypes";

const URL = "http://localhost:4000/api/boiler-type";

export const getBoilerTypesFetching = () => ({
  type: ACTIONS_TYPES.GET_BOILERTYPES_FETCHING,
});

export const getBoilerTypesFulfilled = (payload) => ({
  type: ACTIONS_TYPES.GET_BOILERTYPES_FULFILLED,
  payload,
});

export const getBoilerTypesRejected = () => ({
  type: ACTIONS_TYPES.GET_BOILERTYPES_REJECTED,
});

export const getBoilerTypes = () => (dispatch) => {
  dispatch(getBoilerTypesFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilerTypesFulfilled(response));
    })
    .catch(() => {
      dispatch(getBoilerTypesRejected());
    });
};

export const addBoilerTypeFetching = () => ({
  type: ACTIONS_TYPES.ADD_BOILERTYPE_FETCHING,
});

export const addBoilerTypeFulfilled = (payload) => ({
  type: ACTIONS_TYPES.ADD_BOILERTYPE_FULFILLED,
  payload,
});

export const addBoilerTypeRejected = () => ({
  type: ACTIONS_TYPES.ADD_BOILERTYPE_REJECTED,
});

export const addBoilerType = (newOne) => (dispatch) => {
  dispatch(addBoilerTypeFetching());
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
      return dispatch(addBoilerTypeFulfilled(newOne));
    })
    .catch((err) => {
      return dispatch(addBoilerTypeRejected());
    });
};

export const editBoilerTypeFetching = () => ({
  type: ACTIONS_TYPES.EDIT_BOILERTYPE_FETCHING,
});

export const editBoilerTypeFulfilled = (payload, newOne) => ({
  type: ACTIONS_TYPES.EDIT_BOILERTYPE_FULFILLED,
  payload,
  newOne,
});

export const editBoilerTypeRejected = () => ({
  type: ACTIONS_TYPES.EDIT_BOILERTYPE_REJECTED,
});

export const editBoilerType = (newOne, id) => (dispatch) => {
  dispatch(editBoilerTypeFetching());
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
      return dispatch(editBoilerTypeFulfilled(newOne));
    })
    .catch((err) => {
      return dispatch(editBoilerTypeRejected());
    });
};

export const deleteBoilerTypeFetching = () => ({
  type: ACTIONS_TYPES.DELETE_BOILERTYPE_FETCHING,
});

export const deleteBoilerTypeFulfilled = (payload) => ({
  type: ACTIONS_TYPES.DELETE_BOILERTYPE_FULFILLED,
  payload,
});

export const deleteBoilerTypeRejected = () => ({
  type: ACTIONS_TYPES.DELETE_BOILERTYPE_REJECTED,
});

export const deleteBoilerType = (id) => (dispatch) => {
  dispatch(deleteBoilerTypeFetching());
  fetch(`${URL}/${id}`, {
    method: "ACTIONS_TYPES.DELETE",
  })
    .then((res) => {
      if (!res.ok) throw Error;
      return dispatch(deleteBoilerTypeFulfilled(id));
    })
    .catch((error) => {
      return dispatch(deleteBoilerTypeRejected());
    });
};
