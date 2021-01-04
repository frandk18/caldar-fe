import { ACTIONS_TYPES } from "../types/actionTypes";

const URL = "http://localhost:4000/api/company";

// GET

export const getCompaniesFetching = () => ({
  type: ACTIONS_TYPES.GET_COMPANIES_FETCHING,
});

export const getCompaniesFulfilled = (payload) => ({
  type: ACTIONS_TYPES.GET_COMPANIES_FULFILLED,
  payload,
});

export const getCompaniesRejected = () => ({
  type: ACTIONS_TYPES.GET_COMPANIES_REJECTED,
});

export const getCompanies = () => (dispatch) => {
  dispatch(getCompaniesFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getCompaniesFulfilled(response));
    })
    .catch(() => {
      dispatch(getCompaniesRejected());
    });
};

// ADD

export const addCompanyFetching = () => ({
  type: ACTIONS_TYPES.ADD_COMPANY_FETCHING,
});

export const addCompanyFulfilled = (payload) => ({
  type: ACTIONS_TYPES.ADD_COMPANY_FULFILLED,
  payload,
});

export const addCompanyRejected = () => ({
  type: ACTIONS_TYPES.ADD_COMPANY_REJECTED,
});

export const addCompany = (newOne) => (dispatch) => {
  dispatch(addCompanyFetching());
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
      return dispatch(addCompanyFulfilled(newOne));
    })
    .catch(() => {
      return dispatch(addCompanyRejected());
    });
};

// EDIT

export const editCompanyFetching = () => ({
  type: ACTIONS_TYPES.EDIT_COMPANY_FETCHING,
});

export const editCompanyFulfilled = (payload, newOne) => ({
  type: ACTIONS_TYPES.EDIT_COMPANY_FULFILLED,
  payload,
  newOne,
});

export const editCompanyRejected = () => ({
  type: ACTIONS_TYPES.EDIT_COMPANY_REJECTED,
});

export const editCompany = (newOne, id) => (dispatch) => {
  dispatch(editCompanyFetching());
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
      return dispatch(editCompanyFulfilled(newOne));
    })
    .catch(() => {
      return dispatch(editCompanyRejected());
    });
};

// DELETE

export const deleteCompanyFetching = () => ({
  type: ACTIONS_TYPES.DELETE_COMPANY_FETCHING,
});

export const deleteCompanyFulfilled = (payload) => ({
  type: ACTIONS_TYPES.DELETE_COMPANY_FULFILLED,
  payload,
});

export const deleteCompanyRejected = () => ({
  type: ACTIONS_TYPES.DELETE_COMPANY_REJECTED,
});

export const deleteCompany = (id) => (dispatch) => {
  dispatch(deleteCompanyFetching());
  return fetch(`${URL}/${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteCompanyFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteCompanyRejected());
    });
};
