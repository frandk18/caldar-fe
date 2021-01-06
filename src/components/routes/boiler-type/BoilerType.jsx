import React, { useEffect, useState } from "react";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteBoilerType as deleteBoilerTypeAction,
  addBoilerType as addBoilerTypeAction,
  editBoilerType as editBoilerTypeAction,
  getBoilerTypes as getBoilerTypesAction,
} from "../../../redux/actions/boilerTypeActions";
import { bindActionCreators } from "redux";

const BoilerType = ({
  data,
  isLoading,
  error,
  refresh,
  deleteBoilerType,
  addBoilerType,
  editBoilerType,
  getBoilerTypes,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
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

  const fieldObj = ["boilerType", "stdMaintainance", "obs"];

  const name = "Boiler Types";

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne, _id) => {
    if (_id === null) {
      addBoilerType(newOne);
      toggleForm();
    } else {
      editBoilerType(newOne, _id);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteBoilerType(id);
  };

  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

  return (
    <React.Fragment>
      {showForm && (
        <FormUI
          boilerTypes={data}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={data}
        fieldObj={fieldObj}
        name={name}
        toDelete={toDelete}
        toEdit={captureId}
        toggleForm={toggleForm}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.boilerType.data,
  isLoading: state.boilerType.isLoading,
  error: state.boilerType.error,
  refresh: state.boilerType.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilerTypes: getBoilerTypesAction,
      deleteBoilerType: deleteBoilerTypeAction,
      addBoilerType: addBoilerTypeAction,
      editBoilerType: editBoilerTypeAction,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BoilerType);
