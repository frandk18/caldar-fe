import React, { useState, useEffect } from "react";
import TableUI from "../../shared/TableUI.jsx";
import { connect } from "react-redux";
import { getTechnicians as getTechniciansAction } from "../../../redux/actions/techniciansActions";
import { showModal as showModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../redux/types/modalTypes";
import { bindActionCreators } from "redux";

const Technician = ({
  technicians,
  isLoading,
  error,
  refresh,
  getTechnicians,
  showModal,
}) => {
  const [headCells] = useState([
    {
      id: "fullname",
      align: "center",
      disablePadding: false,
      label: "Full name",
    },
    {
      id: "knowledge",
      align: "center",
      disablePadding: false,
      label: "Knowledge",
    },
    { id: "email", align: "center", disablePadding: false, label: "E-mail" },
    { id: "phone", align: "center", disablePadding: false, label: "Phone" },
    { id: "address", align: "center", disablePadding: false, label: "Address" },
    {
      id: "dateOfBirth",
      align: "center",
      disablePadding: false,
      label: "Birthdate",
    },
  ]);

  const fieldObj = [
    "fullname",
    "knowledge",
    "email",
    "phone",
    "address",
    "dateOfBirth",
  ];

  const name = "Technicians";

  useEffect(() => {
    if (refresh === true) {
      getTechnicians();
    }
  }, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <div>... LOADING</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddEditModal = (id) => {
    if (id === null) {
      showModal(modalTypes.ADD_EDIT_TECHNICIAN, {
        editing: false,
      });
    } else {
      showModal(modalTypes.ADD_EDIT_TECHNICIAN, {
        id: id,
        editing: true,
      });
    }
  };

  const showDeleteModal = (id) => {
    showModal(modalTypes.DELETE_TECHNICIAN, {
      id: id,
    });
  };

  return (
    <React.Fragment>
      <TableUI
        headCells={headCells}
        data={technicians}
        fieldObj={fieldObj}
        name={name}
        toDelete={showDeleteModal}
        toAddEdit={showAddEditModal}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  technicians: state.technicians.data,
  isLoading: state.technicians.isLoading,
  error: state.technicians.error,
  refresh: state.technicians.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTechnicians: getTechniciansAction,
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Technician);
