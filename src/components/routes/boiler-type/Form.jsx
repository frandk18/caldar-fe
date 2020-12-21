import React, { useState } from "react";

function Form(props) {
  const boilerType = props.boilerType.filter(
    (boilerType) => boilerType._id.$oid === props.id
  );
  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? boilerType[0]._id.$oid : null,
    },
    company: props.editing ? boilerType[0].model : "",
    boilers: props.editing ? boilerType[0].std_maintainance : [{ $oid: "" }],
    name: props.editing ? boilerType[0].obs : "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setNewOne({ ...newOne, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEdit(newOne);
  };

  return (
    <div style={formContainer}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <legend>
          {props.editing ? "Edit Boiler Type" : "New Boiler Type"}
        </legend>
        <div style={{ display: "flex" }}>
          <div style={columnStyle}>
            <label>Model: </label>
            <input
              type="text"
              name="model"
              value={newOne.model}
              onChange={handleChange}
            />

            <label>Standard maintainance time: </label>
            <input
              type="number"
              name="std_maintainance"
              value={newOne.std_maintainance}
              onChange={handleChange}
            />
            <label>Observations: </label>
            <textarea
              type="text"
              name="obs"
              value={newOne.obs}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={btnContainer}>
          <button style={btnStyle} type="submit">
            Submit
          </button>
          <button style={btnStyle} type="button" onClick={props.toggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const formContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#CED6DC",
  border: "1px #707070 solid",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "15px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "15px",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "20px",
};

const btnContainer = {
  display: "flex",
};

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  padding: "5px",
  margin: "0 3px",
  borderWidth: "1px",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
};

export default Form;
