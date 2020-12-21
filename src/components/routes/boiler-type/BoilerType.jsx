import React, { useState } from "react";
import BoilerType from "../../mocks/boiler-type.json";
import Table from "./Table.jsx";
import Form from "./Form.jsx";
import { v4 as uuidv4 } from "uuid";

function BoilerModel() {
  const [boilerType, setBoilerType] = useState(BoilerType);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

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
      <div style={containerStyle}>
        <div style={titleStyle}>Boiler Model</div>
        {showForm && (
          <Form
            boilerType={boilerType}
            id={id}
            editing={editing}
            addEdit={addEdit}
            toggleForm={toggleForm}
          />
        )}
        <Table
          boilerType={boilerType}
          toggleForm={toggleForm}
          captureId={captureId}
          delItem={delItem}
        />
      </div>
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
