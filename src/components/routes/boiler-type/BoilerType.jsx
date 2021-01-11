import React, { useEffect, useState } from "react";
import TableUI from "../../shared/TableUI.jsx";
import { connect } from "react-redux";
import { getBoilerTypes as getBoilerTypesAction } from "../../../redux/actions/boilerTypeActions";
import { showModal as showModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../redux/types/modalTypes";
import { bindActionCreators } from "redux";

const BoilerType = ({
  boilerType,
  isLoading,
  error,
  refresh,
  getBoilerTypes,
  showModal,
}) => {
  const [headCells] = useState([
    {
      id: "boilerType",
      align: "center",
      disablePadding: false,
      label: "Boiler Model",
    },
    {
      id: "stdMaintainance",
      align: "center",
      disablePadding: false,
      label: "Standard maintainance time",
    },
    {
      id: "obs",
      align: "center",
      disablePadding: false,
      label: "Observation",
    },
    {
      id: "technician",
      align: "center",
      disablePadding: false,
      label: "Technician that knows how to repair it",
    },
  ]);

  useEffect(() => {
    if (refresh === true) {
      getBoilerTypes();
    }
  }, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <div>... LOADING</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const fieldObj = ["boilerType", "stdMaintainance", "obs", "technician"];

  const name = "Boiler Types";

  const showAddEditModal = (id) => {
    if (id === null) {
      showModal(modalTypes.ADD_EDIT_BOILERTYPE, {
        editing: false,
      });
    } else {
      showModal(modalTypes.ADD_EDIT_BOILERTYPE, {
        id: id,
        editing: true,
      });
    }
  };

  const showDeleteModal = (id) => {
    showModal(modalTypes.DELETE_BOILERTYPE, {
      id: id,
    });
  };

  return (
    <React.Fragment>
      <TableUI
        headCells={headCells}
        data={boilerType}
        fieldObj={fieldObj}
        name={name}
        toDelete={showDeleteModal}
        toAddEdit={showAddEditModal}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypes.data,
  isLoading: state.boilerTypes.isLoading,
  error: state.boilerTypes.error,
  refresh: state.boilerTypes.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilerTypes: getBoilerTypesAction,
      showModal: showModalAction,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BoilerType);
