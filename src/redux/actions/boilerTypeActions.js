import {
  ADD_BOILERTYPE_FETCHING,
  ADD_BOILERTYPE_FULFILLED,
  ADD_BOILERTYPE_REJECTED,
  DELETE_BOILERTYPE_FETCHING,
  DELETE_BOILERTYPE_FULFILLED,
  DELETE_BOILERTYPE_REJECTED,
  EDIT_BOILERTYPE_FETCHING,
  EDIT_BOILERTYPE_FULFILLED,
  EDIT_BOILERTYPE_REJECTED,
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
} from "../types/actionTypes";

const URL = "http://localhost:4000/api/boiler-type";

export const getBoilerTypesFetching = () => ({
  type: GET_BOILERTYPES_FETCHING,
});

export const getBoilerTypesFulfilled = (payload) => ({
  type: GET_BOILERTYPES_FULFILLED,
  payload,
});

export const getBoilerTypesRejected = () => ({
  type: GET_BOILERTYPES_REJECTED,
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
  type: ADD_BOILERTYPE_FETCHING,
});

export const addBoilerTypeFulfilled = (payload) => ({
  type: ADD_BOILERTYPE_FULFILLED,
  payload,
});

export const addBoilerTypeRejected = () => ({
  type: ADD_BOILERTYPE_REJECTED,
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
  type: EDIT_BOILERTYPE_FETCHING,
});

export const editBoilerTypeFulfilled = (payload, newOne) => ({
  type: EDIT_BOILERTYPE_FULFILLED,
  payload,
  newOne,
});

export const editBoilerTypeRejected = () => ({
  type: EDIT_BOILERTYPE_REJECTED,
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
  type: DELETE_BOILERTYPE_FETCHING,
});

export const deleteBoilerTypeFulfilled = (payload) => ({
  type: DELETE_BOILERTYPE_FULFILLED,
  payload,
});

export const deleteBoilerTypeRejected = () => ({
  type: DELETE_BOILERTYPE_REJECTED,
});

export const deleteBoilerType = (id) => (dispatch) => {
  dispatch(deleteBoilerTypeFetching());
  fetch(`${URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw Error;
      return dispatch(deleteBoilerTypeFulfilled(id));
    })
    .catch((error) => {
      return dispatch(deleteBoilerTypeRejected());
    });
};