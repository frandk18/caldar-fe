import { Form, Field } from "react-final-form";
import { React, useState } from "react";
import Select from "../../shared/Select.jsx";

const BuildingForm = (props) => {
  const building = props.buildings.filter(
    (building) => building._id === props.id
  );

  const [newOne, setNewOne] = useState({
    company: props.editing
      ? building[0].company === undefined
        ? ""
        : building[0].company
      : "",
    boilers: props.editing ? building[0].boilers : [],
    name: props.editing ? building[0].name : "",
    address: props.editing ? building[0].address : "",
    zipcode: props.editing ? building[0].zipcode : "",
    contact: props.editing ? building[0].contact : "",
    phone: props.editing ? building[0].phone : "",
    email: props.editing ? building[0].email : "",
    obs: props.editing ? building[0].obs : "",
  });
  const _id = props.editing ? building[0]._id : null;

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        company: newOne.company,
        boilers: newOne.boilers,
        name: newOne.name,
        address: newOne.address,
        zipcode: newOne.zipcode,
        contact: newOne.contact,
        phone: newOne.phone,
        email: newOne.email,
        obs: newOne.obs,
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <div>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={formStyle}
          >
            <legend style={{ margin: 8 }}>
              {props.editing ? "Edit Building" : "New Building"}
            </legend>

            <div style={{ display: "flex", border: "2px #ccc solid" }}>
              <div style={columnStyle}>
                <Field
                  name="company"
                  label="Company"
                  options={props.companies}
                  field={"name"}
                  component={Select}
                ></Field>

                <Field
                  name="boilers"
                  label="Boilers"
                  options={props.boilers}
                  field={"serialNumber"}
                  component={Select}
                ></Field>

                <Field
                  name="name"
                  label="Name"
                  component="input"
                  type="text"
                  placeholder="Type your name"
                  style={input}
                ></Field>

                <Field
                  name="address"
                  label="Address"
                  component="input"
                  type="text"
                  placeholder="Type your address"
                  style={input}
                ></Field>

                <Field
                  name="zipcode"
                  label="Zip Code"
                  component="input"
                  type="text"
                  placeholder="Type your address"
                ></Field>
              </div>

              <div style={columnStyle}>
                <label>Contact: </label>
                <Field
                  name="contact"
                  component="input"
                  type="text"
                  placeholder="Type contact name"
                ></Field>

                <label>Phone: </label>
                <Field
                  name="phone"
                  component="input"
                  type="number"
                  placeholder="Type phone number"
                ></Field>

                <label>Email: </label>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Type an email"
                ></Field>

                <label>Observations:</label>
                <Field
                  name="obs"
                  component="textarea"
                  type="text"
                  placeholder="Write some details"
                ></Field>
              </div>
            </div>

            <div style={btnContainer}>
              <button style={btnStyle} type="button">
                Cancel
              </button>

              <button style={btnStyle} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    />
  );
};

const input = {
  boxSizing: "border-box",
  margin: "8",
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
  margin: "10px 0px",
};

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  padding: "5px",
  margin: "0 10px",
  borderWidth: "1px",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
};

export default BuildingForm;
