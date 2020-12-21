import React, { useState } from "react";
import Buildings from "../../../mocks/building.json";
import Table from "./Table.jsx";
import Form from "./Form.jsx";
import { v4 as uuidv4 } from "uuid";

function Building() {
  const [buildings, setBuildings] = useState(Buildings);
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
    if (editing) {
      setEditing(false);
    }
  };

  const delItem = (id) => {
    if (id !== null) {
      setBuildings([
        ...buildings.filter((building) => building._id.$oid !== id),
      ]);
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

  return (
    <React.Fragment>
      <div style={containerStyle}>
        <div style={titleStyle}>Buildings</div>
        {showForm && (
          <Form
            buildings={buildings}
            id={id}
            editing={editing}
            addEdit={addEdit}
            toggleForm={toggleForm}
          />
        )}
        <Table
          buildings={buildings}
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
  //border: "2px #707070 solid",
  //borderRadius: "25px",
  //padding: "30px 30px 30px 30px",
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#094455",
  textDecoration: "underline",
  textAlign: "center",
  marginBottom: "20px",
};

export default Building;
