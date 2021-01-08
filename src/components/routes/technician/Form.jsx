import { Form, Field } from "react-final-form";
import { React, useState } from "react";
import {
  required,
  composeValidators,
  validateName,
  validateEmail,
  validatePhone,
} from "../../../utils/validations.js";
import TextInput from "../../shared/TextInput.jsx";
import NumberInput from "../../shared/NumberInput.jsx";
import DateInput from "../../shared/DateInput.jsx";
import TextArea from "../../shared/TextArea.jsx";
import {
  addTechnician as addTechnicianAction,
  editTechnician as editTechnicianAction,
} from "../../../redux/actions/techniciansActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TechnicianForm = (props) => {
  const technician = props.technicians.filter(
    (technician) => technician._id === props.id
  );
  const [newOne] = useState({
    fullname: props.editing ? technician[0].fullname : "",
    email: props.editing ? technician[0].email : "",
    phone: props.editing ? technician[0].phone : "",
    address: props.editing ? technician[0].address : "",
    dateOfBirth: props.editing ? technician[0].dateOfBirth : "09/12/2018",
    obs: props.editing ? technician[0].obs : "",
    knowledge: props.editing
      ? JSON.parse(JSON.stringify(technician[0].knowledge))
      : [],
    services: [],
  });

  //I hate date formats
  //This is cause my db have this format: 8/22/1991 and i need 08/22/1991
  function normalizeDate(input) {
    let parts = input.split("/");
    return (
      (parts[2] < 10 ? "0" : "") +
      parseInt(parts[2]) +
      "-" +
      (parts[0] < 10 ? "0" : "") +
      parseInt(parts[0]) +
      "-" +
      (parts[1] < 10 ? "0" : "") +
      parseInt(parts[1])
    );
  }

  const newDate = normalizeDate(newOne.dateOfBirth);
  const id = props.editing ? technician[0]._id : null;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onSubmitTechnician = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    console.log(values);
    values.services = newOne.services;
    if (!props.editing) {
      props.addTechnician(values);
      props.closeModal();
    } else {
      props.editTechnician(values, id);
      props.closeModal();
    }
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
      render={({
        handleSubmit,
        handleChange,
        form,
        submitting,
        pristine,
        values,
      }) => (
        <div>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={formStyle}
          >
            <legend style={{ margin: 8 }}>
              {props.editing ? "Edit Technician" : "New Technician"}
            </legend>

            <div style={{ display: "flex", border: "2px #ccc solid" }}>
              <div style={columnStyle}>
                <div style={fieldStyle}>
                  <Field
                    name="fullname"
                    component={TextInput}
                    placeholder="Type your Full name"
                    label="Full name:"
                    validate={composeValidators(required, validateName)}
                  />
                </div>
                <div style={fieldStyle}>
                  <Field
                    name="email"
                    component={TextInput}
                    placeholder="Type your Email"
                    label="Email:"
                    validate={composeValidators(required, validateEmail)}
                  />
                </div>
                <Field
                  name="phone"
                  component={NumberInput}
                  placeholder="Type your Phone"
                  label="Phone:"
                  validate={composeValidators(required, validatePhone)}
                />
                <div style={fieldStyle}>
                  <Field
                    name="address"
                    component={TextInput}
                    type="text"
                    placeholder="Type your Address"
                    label="Address"
                    validate={required}
                  />
                </div>
              </div>
              <div style={columnStyle}>
                <div style={fieldStyle}>
                  <label>Knowledge:</label>
                  <div style={checkboxStyle}>
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
                  </div>
                </div>
                <div style={fieldStyle}>
                  <Field
                    name="dateOfBirth"
                    component={DateInput}
                    label="Date of birth"
                    validate={required}
                  />
                </div>
                <div style={fieldStyle}>
                  <Field
                    name="obs"
                    component={TextArea}
                    placeholder="Obs"
                    label="obs"
                  />
                </div>
              </div>
            </div>
            <div style={btnContainer}>
              <button
                style={btnStyle}
                type="button"
                onClick={() => props.closeModal()}
              >
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTechnician: addTechnicianAction,
      editTechnician: editTechnicianAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(TechnicianForm);

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
  justifyContent: "space-between",
  margin: "20px",
};

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "10px 0",
};

const checkboxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
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
