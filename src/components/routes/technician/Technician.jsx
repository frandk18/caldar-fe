import React, { useState } from "react";
import Technicians from "../../../mocks/technician.json";
//import Table from "./Table.jsx";
import DataForm from "./DataForm.jsx";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";

function Technician() {
  const [technicians, setTechnicians] = useState(Technicians);
  const [showForm, setShowForm] = useState(false);
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
  const name = "Technician";
  const captureId = (id) => {
    setId(id);
    toggleForm();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const delItem = (id) => {
    if (id !== null) {
      setTechnicians([
        ...technicians.filter((technician) => technician._id.$oid !== id),
      ]);
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
    }
    toggleForm();
  };

  const toDelete = (id) => {
    console.log("deleteee", id);
    if (id !== null) {
      setTechnicians([
        ...technicians.filter((technician) => technician._id.$oid !== id),
      ]);
    }
  };

  const toEdit = (id) => {
    console.log(id);
    toggleForm();
  };

  const toAdd = () => {
    console.log("NEW");
  };

  return (
    <React.Fragment>
      {showForm && (
        <DataForm
          technicians={technicians}
          id={id}
          addEdit={addEdit}
          toggleForm={toggleForm}
        />
      )}
      <div>{showForm && <FormUI />}</div>
      {/*
      <Table
        technicians={technicians}
        toggleForm={toggleForm}
        newItem={newItem}
        captureId={captureId}
        delItem={delItem}
      />*/}
      <TableUI
        headCells={headCells}
        data={technicians}
        fieldObj={fieldObj}
        name={name}
        toDelete={toDelete}
        toEdit={toEdit}
        toAdd={toAdd}
        toggleForm={toggleForm}
      />
    </React.Fragment>
  );
}

export default Technician;
