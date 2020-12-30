import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteBoilerType as deleteBoilerTypeAction,
  addBoilerType as addBoilerTypeAction,
  editBoilerType as editBoilerTypeAction,
} from "../../../redux/actions/boilerTypeActions";

function BoilerType({ data, deleteBoilerType, addBoilerType, editBoilerType }) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
  const boilerType = data;

  const [headCells] = useState([
    {
      id: "model",
      align: "center",
      disablePadding: false,
      label: "Boiler Model",
    },
    {
      id: "std_maintainance",
      align: "center",
      disablePadding: false,
      label: "Standard maintainance time",
    },
    {
      id: "observation",
      align: "center",
      disablePadding: false,
      label: "Observation",
    },
  ]);

  const fieldObj = ["model", "std_maintainance", "observation"];

  const name = "Boiler Types";

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne) => {
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      addBoilerType(newOne);
      toggleForm();
    } else {
      editBoilerType(newOne);
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
          boilerType={boilerType}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={boilerType}
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
  data: state.boilerType.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoilerType: (id) => dispatch(deleteBoilerTypeAction(id)),
    addBoilerType: (newOne) => dispatch(addBoilerTypeAction(newOne)),
    editBoilerType: (newOne) => dispatch(editBoilerTypeAction(newOne)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoilerType);
