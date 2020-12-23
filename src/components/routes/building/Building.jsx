import React, { useState } from "react";
import Buildings from "../../../mocks/building.json";
import Boilers from "../../../mocks/boiler.json";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { v4 as uuidv4 } from "uuid";

function Building() {
  const [buildings, setBuildings] = useState(Buildings);
  const [boilers] = useState(Boilers);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
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
    let updateBuildings = null;
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      updateBuildings = [...buildings, newOne];
      setBuildings(updateBuildings);
      toggleForm();
    } else {
      updateBuildings = [
        ...buildings.map((building) => {
          if (building._id.$oid === newOne._id.$oid) {
            building = newOne;
          }
          return building;
        }),
      ];
      setBuildings(updateBuildings);
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
      setBuildings([
        ...buildings.filter((building) => building._id.$oid !== id),
      ]);
    }
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
}

export default Building;
