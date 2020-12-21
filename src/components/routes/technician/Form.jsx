import React, { useState } from "react";

function Form(props) {
  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.technician._id.$oid ? props.technician._id.$oid : null,
    },
    fullname: props.technician.fullname,
    knowledge: props.technician.knowledge,
    email: props.technician.email,
    phone: props.technician.phone,
    address: props.technician.address,
    dateOfBirth: props.technician.dateOfBirth,
    obs: props.technician.obs,
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setNewOne({
      ...newOne,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEdit(newOne);
  };

  return (
    <div style={formContainer}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            {newOne.fullname ? `Edit Technician` : `New Technician`}
          </legend>
          <div style={inputContainer}>
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              label="fullname"
              id="fullname"
              name="fullname"
              defaultValue={newOne.fullname}
              onChange={handleChange}
            ></input>
          </div>
          <div style={inputContainer}>
            <label htmlFor="knowledge">Knowledge:</label>
            <select
              id="knowledge"
              name="knowledge"
              defaultValue={newOne.knowledge}
              onChange={handleChange}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <div style={inputContainer}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              width="auto"
              label="email"
              name="email"
              defaultValue={newOne.email}
              onChange={handleChange}
            ></input>
          </div>
          <div style={inputContainer}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              label="phone"
              name="phone"
              defaultValue={newOne.phone}
              onChange={handleChange}
            ></input>
          </div>
          <div style={inputContainer}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              label="address"
              name="address"
              defaultValue={newOne.address}
              onChange={handleChange}
            ></input>
          </div>
          <div style={inputContainer}>
            <label htmlFor="dateOfBirth">Date of birth:</label>
            <input
              type="text"
              label="dateOfBirth"
              name="dateOfBirth"
              defaultValue={newOne.dateOfBirth}
              onChange={handleChange}
            ></input>
          </div>
          <div style={inputContainer}>
            <label htmlFor="obs">Obs:</label>
            <textarea
              style={{ width: "500px", height: "100px" }}
              label="obs"
              name="obs"
              defaultValue={newOne.obs}
              onChange={handleChange}
            ></textarea>
          </div>
          <div style={inputContainer}>
            <input type="submit" value="Submit"></input>
            <input
              type="button"
              value="Cancel"
              onClick={props.toggleForm}
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const formContainer = {
  border: "1px solid black",
  height: "auto",
  padding: "50px",
  margin: "10px",
};

const inputContainer = {
  padding: "20px 0px 0px 20px",
};

export default Form;
