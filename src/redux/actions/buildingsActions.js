import { ACTIONS_TYPES } from "../types/actionTypes";

const URL = "http://localhost:4000/api/building";

// GET

export const getBuildingsFetching = () => ({
  type: ACTIONS_TYPES.GET_BUILDINGS_FETCHING,
});

export const getBuildingsFulfilled = (payload) => ({
  type: ACTIONS_TYPES.GET_BUILDINGS_FULFILLED,
  payload,
});

export const getBuildingsRejected = () => ({
  type: ACTIONS_TYPES.GET_BUILDINGS_REJECTED,
});

export const getBuildings = () => (dispatch) => {
  dispatch(getBuildingsFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBuildingsFulfilled(response));
    })
    .catch(() => {
      dispatch(getBuildingsRejected());
    });
};

// ADD

export const addBuildingFetching = () => ({
  type: ACTIONS_TYPES.ADD_BUILDING_FETCHING,
});

export const addBuildingFulfilled = (payload) => ({
  type: ACTIONS_TYPES.ADD_BUILDING_FULFILLED,
  payload,
});

export const addBuildingRejected = () => ({
  type: ACTIONS_TYPES.ADD_BUILDING_REJECTED,
});

export const addBuilding = (newOne) => (dispatch) => {
  dispatch(addBuildingFetching());
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
      return dispatch(addBuildingFulfilled(newOne));
    })
    .catch(() => {
      return dispatch(addBuildingRejected());
    });
};

// EDIT

export const editBuildingFetching = () => ({
  type: ACTIONS_TYPES.EDIT_BUILDING_FETCHING,
});

export const editBuildingFulfilled = (payload, newOne) => ({
  type: ACTIONS_TYPES.EDIT_BUILDING_FULFILLED,
  payload,
  newOne,
});

export const editBuildingRejected = () => ({
  type: ACTIONS_TYPES.EDIT_BUILDING_REJECTED,
});

export const editBuilding = (newOne, id) => (dispatch) => {
  dispatch(editBuildingFetching());
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
      return dispatch(editBuildingFulfilled(newOne));
    })
    .catch(() => {
      return dispatch(editBuildingRejected());
    });
};

// DELETE

export const deleteBuildingFetching = () => ({
  type: ACTIONS_TYPES.DELETE_BUILDING_FETCHING,
});

export const deleteBuildingFulfilled = (payload) => ({
  type: ACTIONS_TYPES.DELETE_BUILDING_FULFILLED,
  payload,
});

export const deleteBuildingRejected = () => ({
  type: ACTIONS_TYPES.DELETE_BUILDING_REJECTED,
});

export const deleteBuilding = (id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBuildingFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteBuildingRejected());
    });
};
