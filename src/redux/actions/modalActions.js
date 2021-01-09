import { ACTIONS_TYPES } from "../types/actionTypes";

export const showModal = (modalType, meta = {}) => {
  return {
    type: ACTIONS_TYPES.SHOW_MODAL,
    modalType,
    meta,
  };
};

export const closeModal = () => {
  return {
    type: ACTIONS_TYPES.CLOSE_MODAL,
  };
};