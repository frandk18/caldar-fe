import React, { useState } from "react";
import Technicians from "../../../mocks/technician.json";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { v4 as uuidv4 } from "uuid";

function Technician() {
  const [technicians, setTechnicians] = useState(Technicians);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
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
    let updateTechnicians = null;
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      updateTechnicians = [...technicians, newOne];
      setTechnicians(updateTechnicians);
      toggleForm();
    } else {
      updateTechnicians = [
        ...technicians.map((technician) => {
          if (technician._id.$oid === newOne._id.$oid) {
            technician = newOne;
          }
          return technician;
        }),
      ];
      setTechnicians(updateTechnicians);
      setEditing(false);
    }
    toggleForm();
  };

  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

  const toDelete = (id) => {
    if (id !== null) {
      setTechnicians([
        ...technicians.filter((technician) => technician._id.$oid !== id),
      ]);
    }
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
}
export default Technician;
