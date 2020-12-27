import React, { useState } from "react";
import Buildings from "../../../mocks/building.json";
import Boilers from "../../../mocks/boiler.json";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { v4 as uuidv4 } from "uuid";

function Boiler() {
  const [boilers, setBoilers] = useState(Boilers);
  const [buildings] = useState(Buildings);
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
    //"building",
    "manufacturingDate",
    "status",
  ];

  const name = "Boilers";

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne) => {
    let updateBoilers = null;
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      updateBoilers = [...boilers, newOne];
      setBoilers(updateBoilers);
      toggleForm();
    } else {
      updateBoilers = [
        ...boilers.map((boiler) => {
          if (boiler._id.$oid === newOne._id.$oid) {
            boiler = newOne;
          }
          return boiler;
        }),
      ];
      setBoilers(updateBoilers);
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
      setBoilers([...boilers.filter((boiler) => boiler._id.$oid !== id)]);
    }
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

export default Boiler;
