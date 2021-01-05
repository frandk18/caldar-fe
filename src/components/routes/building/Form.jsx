import { Form, Field } from "react-final-form";
import { React, useState } from "react";

const BuildingForm = (props) => {
  const building = props.buildings.filter(
    (building) => building._id === props.id
  );
  const [newOne, setNewOne] = useState({
    fullname: props.editing ? building[0].fullname : "",
    email: props.editing ? building[0].email : "",
    phone: props.editing ? building[0].phone : "",
    address: props.editing ? building[0].address : "",
    dateOfBirth: props.editing ? building[0].dateOfBirth : "09/12/2018",
    obs: props.editing ? building[0].obs : "",
    knowledge: props.editing
      ? JSON.parse(JSON.stringify(building[0].knowledge))
      : [],
    services: [],
  });

  //I hate date formats
  //This is cause my db have this format: 8/22/1991 and need 08/22/1991
  function normalizeDate(input) {
    let parts = input.split("/");
    return (
      (parts[2] < 10 ? "0" : "") +
      parseInt(parts[2]) +
      "-" +
      (parts[0] < 10 ? "0" : "") +
      parseInt(parts[0]) +
      "-" +
      parseInt(parts[1])
    );
  }

  const newDate = normalizeDate(newOne.dateOfBirth);

  const onSubmitTechnician = () => {
    console.log("submit");
  };

  return (
    <Form
      onSubmit={onSubmitTechnician}
      initialValues={{
        fullname: newOne.fullname,
        email: newOne.email,
        phone: newOne.phone,
        knowledge: newOne.knowledge,
        address: newOne.address,
        obs: newOne.obs,
        dateOfBirth: newDate,
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <div>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <label>Full name:</label>
            <Field
              name="fullname"
              component="input"
              type="text"
              placeholder="Type your Full name"
            ></Field>
            <label>Email:</label>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Type your Email"
            ></Field>
            <label>Phone:</label>
            <Field
              name="phone"
              component="input"
              type="number"
              placeholder="Type your Phone"
            ></Field>
            <label>Address:</label>
            <Field
              name="address"
              component="input"
              type="text"
              placeholder="Type your Address"
            ></Field>
            <label>
              Knowledge:
              <Field
                name="knowledge"
                component="input"
                type="checkbox"
                value="A"
              />
              A{" "}
              <Field
                name="knowledge"
                component="input"
                type="checkbox"
                value="B"
              />
              B{" "}
              <Field
                name="knowledge"
                component="input"
                type="checkbox"
                value="C"
              />
              C{" "}
              <Field
                name="knowledge"
                component="input"
                type="checkbox"
                value="D"
              />
              D{" "}
            </label>
            <label>Birthdate:</label>
            <Field
              name="dateOfBirth"
              component="input"
              type="date"
              newDate={newDate}
            >
              {(props) => (
                <div>
                  <input type="date" {...props.input} />
                </div>
              )}
            </Field>
            <label>Obs:</label>
            <Field
              name="obs"
              component="textarea"
              type="text"
              placeholder="Type your Address"
            ></Field>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    />
  );
};

export default BuildingForm;
