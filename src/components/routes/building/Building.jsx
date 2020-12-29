import React, { useState } from "react";
import Boilers from "../../../mocks/boiler.json";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteBuilding as deleteBuildingAction,
  addBuilding as addBuildingAction,
  editBuilding as editBuildingAction,
} from "../../../redux/actions/buildingsActions";

const Building = ({ data, deleteBuilding, addBuilding, editBuilding }) => {
  const [boilers] = useState(Boilers);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
  const buildings = data;

  const [headCells] = useState([
    { id: "company", align: "center", disablePadding: false, label: "Company" },
    { id: "name", align: "center", disablePadding: false, label: "Name" },
    { id: "address", align: "center", disablePadding: false, label: "Address" },
    {
      id: "zipcode",
      align: "center",
      disablePadding: false,
      label: "Zip Code",
    },
    { id: "contact", align: "center", disablePadding: false, label: "Contact" },
    { id: "phone", align: "center", disablePadding: false, label: "Phone" },
    { id: "email", align: "center", disablePadding: false, label: "Email" },
  ]);

  const fieldObj = [
    "company",
    "name",
    "address",
    "zipcode",
    "contact",
    "phone",
    "email",
  ];

  const name = "Buildings";

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne) => {
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      addBuilding(newOne);
      toggleForm();
    } else {
      editBuilding(newOne);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteBuilding(id);
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
          buildings={buildings}
          boilers={boilers}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={buildings}
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
  data: state.buildings.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBuilding: (id) => dispatch(deleteBuildingAction(id)),
    addBuilding: (newOne) => dispatch(addBuildingAction(newOne)),
    editBuilding: (newOne) => dispatch(editBuildingAction(newOne)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Building);
