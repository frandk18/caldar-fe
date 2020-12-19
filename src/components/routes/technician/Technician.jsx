import React, { useState } from "react";
import Technicians from "../../../mocks/technician.json";
import Table from "./Table.jsx";
import DataForm from "./DataForm.jsx";
import { v4 as uuidv4 } from "uuid";

function Technician() {
  const [technicians, setTechnicians] = useState(Technicians);
  const [newItem, setNewItem] = useState(false);
  const [id, setId] = useState(null);

  const captureId = (id) => {
    setId(id);
    toggleForm();
  };

  const toggleForm = () => {
    setNewItem(!newItem);
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

  return (
    <React.Fragment>
      {newItem && (
        <DataForm
          technicians={technicians}
          id={id}
          addEdit={addEdit}
          toggleForm={toggleForm}
        />
      )}
      <Table
        technicians={technicians}
        toggleForm={toggleForm}
        newItem={newItem}
        captureId={captureId}
        delItem={delItem}
      />
    </React.Fragment>
  );
}
export default Technician;
