import React, { useState } from "react";
import BoilerType from "../../../mocks/boiler-type.json";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";

function BoilerModel() {
  const [boilerType, setBoilerType] = useState(BoilerType);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

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

  const name = "Boiler Type";
  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const delItem = (id) => {
    if (id !== null) {
      setBoilerType([
        ...boilerType.filter((boilerType) => boilerType._id.$oid !== id),
      ]);
    }
  };

  const addEdit = (newOne) => {
    let updateBoilerType = null;
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      updateBoilerType = [...boilerType, newOne];
      setBoilerType(updateBoilerType);
      toggleForm();
    } else {
      updateBoilerType = [
        ...boilerType.map((boilerType) => {
          if (boilerType._id.$oid === newOne._id.$oid) {
            boilerType = newOne;
          }
          return boilerType;
        }),
      ];
      setBoilerType(updateBoilerType);
      setEditing(false);
    }
    toggleForm();
  };

  console.log(editing);

  return (
    <React.Fragment>
      <div>
        {showForm && (
          <FormUI
            toggleForm={toggleForm}
            showForm={showForm}
            boilerType={boilerType}
            id={id}
            editing={editing}
            addEdit={addEdit}
          />
        )}
      </div>
      <TableUI
        headCells={headCells}
        data={boilerType}
        fieldObj={fieldObj}
        name={name}
        toDelete={delItem}
        toEdit={captureId}
        toggleForm={toggleForm}
      />
    </React.Fragment>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px #707070 solid",
  borderRadius: "25px",
  padding: "30px 50px 50px 50px",
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#094455",
  textDecoration: "underline",
  textAlign: "center",
  marginBottom: "20px",
};

export default BoilerModel;
