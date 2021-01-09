

import React from "react";
import { connect } from "react-redux";
import { closeModal as closeModalAction } from "../../../../redux/actions/modalActions";
import { deleteCompany as deleteCompanyAction } from "../../../../redux/actions/companiesActions";
import { bindActionCreators } from "redux";
//import styles from "./removeMessage.module.css";

const RemoveCompanyMessage = ({ closeModal, deleteCompany, id }) => {
  const toDelete = () => {
    deleteCompany(id);
    closeModal();
  };

  return (
    <div>
      Are you sure you want to delete this company?
      <div style={btnContainer}>
        <button style={btnStyle} type="button" onClick={() => closeModal()}>
          Cancel
        </button>

        <button style={btnStyle} type="button" onClick={() => toDelete()}>
          Confirm
        </button>
      </div>
    </div>
  );
};

const btnContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  padding: "5px",
  margin: "0 10px",
  borderWidth: "1px",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteCompany: deleteCompanyAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(RemoveCompanyMessage);