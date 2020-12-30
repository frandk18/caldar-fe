import { ACTIONS_TYPES } from "../types/actionTypes";

/*import { DELETE_BUILDING } from "../types/actionTypes";
import { ADD_BUILDING } from "../types/actionTypes";
import { EDIT_BUILDING } from "../types/actionTypes";*/

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

/*export const deleteBuilding = (id) => {
  return {
    type: DELETE_BUILDING,
    id,
  };
};

export const addBuilding = (newOne) => {
  return {
    type: ADD_BUILDING,
    newOne,
  };
};

export const editBuilding = (newOne) => {
  return {
    type: EDIT_BUILDING,
    newOne,
  };
};*/
