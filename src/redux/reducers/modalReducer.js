import { ACTIONS_TYPES } from "../types/actionTypes";

const initialState = {
  show: false,
  modalType: null,
  meta: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SHOW_MODAL:
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        meta: action.meta,
      };
    case ACTIONS_TYPES.CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
