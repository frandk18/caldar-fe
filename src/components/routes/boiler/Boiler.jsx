import React, { useState, useEffect } from "react";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteBoiler as deleteBoilerAction,
  addBoiler as addBoilerAction,
  editBoiler as editBoilerAction,
  getBoilers as getBoilersAction,
} from "../../../redux/actions/boilersActions";
import { bindActionCreators } from "redux";

const Boiler = ({
  buildings,
  boilers,
  isLoading,
  error,
  refresh,
  deleteBoiler,
  addBoiler,
  editBoiler,
  getBoilers,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

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
  }, [refresh]);

  if (isLoading) {
    return <div>... LOADING</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne, _id) => {
    if (_id === null) {
      addBoiler(newOne);
      toggleForm();
    } else {
      editBoiler(newOne, id);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteBoiler(id);
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
          boilers={boilers}
          buildings={buildings}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={boilers}
        fieldObj={fieldObj}
        name={name}
        toDelete={toDelete}
        toEdit={captureId}
        toggleForm={toggleForm}
      />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  buildings: state.buildings.data,
  boilers: state.boilers.data,
  isLoading: state.boilers.isLoading,
  error: state.boilers.error,
  refresh: state.boilers.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBoilers: getBoilersAction,
      deleteBoiler: deleteBoilerAction,
      addBoiler: addBoilerAction,
      editBoiler: editBoilerAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Boiler);
