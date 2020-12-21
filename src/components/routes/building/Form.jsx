import React, { useState } from "react";

function Form(props) {
  const building = props.buildings.filter(
    (building) => building._id.$oid === props.id
  );
  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? building[0]._id.$oid : null,
    },
    company: props.editing ? building[0].company : "",
    boilers: props.editing ? building[0].boilers : [{ $oid: "" }],
    name: props.editing ? building[0].name : "",
    address: props.editing ? building[0].address : "",
    zipcode: props.editing ? building[0].zipcode : "",
    contact: props.editing ? building[0].contact : "",
    phone: props.editing ? building[0].phone : "",
    email: props.editing ? building[0].email : "",
    obs: props.editing ? building[0].obs : "",
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
        <legend>{props.editing ? "Edit Building" : "New Building"}</legend>
        <div style={{ display: "flex" }}>
          <div style={columnStyle}>
            <label>Company: </label>
            <select
              name="company"
              value={newOne.company}
              onChange={handleChange}
            >
              {props.buildings.map((building, index) => {
                return (
                  <option key={index} value={building.company}>
                    {building.company}
                  </option>
                );
              })}
            </select>

            <label>Boilers: </label>
            <select
              name="boilers"
              value={newOne.boilers[0]}
              onChange={handleChange}
            >
              {/*{props.buildings.map((building,index) => {
                                return <option key={index} value={building.boilers[0].$oid}>{building.boilers[0].$oid}</option>
                            })}*/}
            </select>

            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={newOne.name}
              onChange={handleChange}
            />

            <label>Address: </label>
            <input
              type="text"
              name="address"
              value={newOne.address}
              onChange={handleChange}
            />

            <label>Zip Code: </label>
            <input
              type="text"
              name="zipcode"
              value={newOne.zipcode}
              onChange={handleChange}
            />
          </div>

          <div style={columnStyle}>
            <label>Contact: </label>
            <input
              type="text"
              name="contact"
              value={newOne.contact}
              onChange={handleChange}
            />

            <label>Phone: </label>
            <input
              type="text"
              name="phone"
              value={newOne.phone}
              onChange={handleChange}
            />

            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={newOne.email}
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
