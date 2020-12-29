import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteTechnician as deleteTechnicianAction,
  addTechnician as addTechnicianAction,
  editTechnician as editTechnicianAction,
} from "../../../redux/actions/techniciansActions";

const Technician = ({
  data,
  deleteTechnician,
  addTechnician,
  editTechnician,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
  const technicians = data;
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

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne) => {
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      addTechnician(newOne);
      toggleForm();
    } else {
      editTechnician(newOne);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteTechnician(id);
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
          technicians={technicians}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={technicians}
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
  data: state.technicians.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTechnician: (id) => dispatch(deleteTechnicianAction(id)),
    addTechnician: (newOne) => dispatch(addTechnicianAction(newOne)),
    editTechnician: (newOne) => dispatch(editTechnicianAction(newOne)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Technician);
