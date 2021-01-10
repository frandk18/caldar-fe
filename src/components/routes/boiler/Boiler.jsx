import React, { useState, useEffect } from "react";
import TableUI from "../../shared/TableUI.jsx";
import { connect } from "react-redux";
import { getBoilers as getBoilersAction } from "../../../redux/actions/boilersActions";
import { showModal as showModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../redux/types/modalTypes";
import { bindActionCreators } from "redux";

const Boiler = ({
  boilers,
  isLoading,
  error,
  refresh,
  getBoilers,
  showModal,
}) => {
  const [headCells] = useState([
    {
      id: "serialNumber",
      align: "center",
      disablePadding: false,
      label: "Serial Number",
    },
    { id: "type", align: "center", disablePadding: false, label: "Type" },
    {
      id: "manufacturingDate",
      align: "center",
      disablePadding: false,
      label: "Manufacturing Date",
    },
    { id: "status", align: "center", disablePadding: false, label: "Status" },
    {
      id: "building",
      align: "center",
      disablePadding: false,
      label: "Building",
    },
  ]);

  const fieldObj = [
    "serialNumber",
    "type",
    "manufacturingDate",
    "status",
    "building",
  ];

  const name = "Boilers";

  useEffect(() => {
    if (refresh === true) {
      getBoilers();
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
      showModal(modalTypes.ADD_EDIT_BOILER, {
        editing: false,
      });
    } else {
      showModal(modalTypes.ADD_EDIT_BOILER, {
        id: id,
        editing: true,
      });
    }
  };

  const showDeleteModal = (id) => {
    showModal(modalTypes.DELETE_BOILER, {
      id: id,
    });
  };

  return (
    <React.Fragment>
      <TableUI
        headCells={headCells}
        data={boilers}
        fieldObj={fieldObj}
        name={name}
        toDelete={showDeleteModal}
        toAddEdit={showAddEditModal}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  boilers: state.boilers.data,
  isLoading: state.boilers.isLoading,
  error: state.boilers.error,
  refresh: state.boilers.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilers: getBoilersAction,
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Boiler);
