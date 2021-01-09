import { Form, Field } from "react-final-form";
import { React, useState } from "react";
import SimpleSelect from "../../../shared/SimpleSelect.jsx";
import MultipleSelect from "../../../shared/MultipleSelect.jsx";
import TextArea from "../../../shared/TextArea.jsx";
import TextInput from "../../../shared/TextInput.jsx";
import NumberInput from "../../../shared/NumberInput.jsx";
import {
  required,
  composeValidators,
  validateName,
  validateEmail,
  validatePhone,
} from "../../../../utils/validations.js";
import {
  addCompany as addCompanyAction,
  editCompany as editCompanyAction,
} from "../../../../redux/actions/companiesActions";
import { closeModal as closeModalAction } from "../../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CompanyForm = (props) => {
  const company = props.companies.filter(
    (company) => company._id === props.id
  );

  const [newOne] = useState({
    buildings: props.editing
    ? company[0].buildings === undefined
      ? ""
      : company[0].buildings
    : "",
    CIN: props.editing ? company[0].CIN: "",
    name: props.editing ? company[0].name : "",
    address: props.editing ? company[0].address : "",
    zipcode: props.editing ? company[0].zipcode : "",
    contact: props.editing ? company[0].contact : "",
    phone: props.editing ? company[0].phone : "",
    email: props.editing ? company[0].email : "",
    obs: props.editing ? company[0].obs : "",
  });

  const id = props.editing ? company[0]._id : null;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Handle Building Field
  const [buildingId, setBuildingId] = useState(
    props.editing ? company[0].buildings : []
  );
  const handleSelectBuildingsChange = (e) => {
    setBuildingId(e.target.value);
  };

  const handleSubmit = async (values) => {
    await sleep(100);
    window.alert(JSON.stringify(values, 0, 2));
    console.log(values);
    if (!props.editing) {
      props.addCompany(values);
      props.closeModal();
    } else {
      props.editCompany(values, id);
      props.closeModal();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        buildings: buildingId,
        CIN: newOne.CIN,
        name: newOne.name,
        address: newOne.address,
        zipcode: newOne.zipcode,
        contact: newOne.contact,
        phone: newOne.phone,
        email: newOne.email,
        obs: newOne.obs,
      }}
      onChange={{
        buildings: handleSelectBuildingsChange,
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
              {props.editing ? "Edit Company" : "New Company"}
            </legend>

            <div style={{ display: "flex", border: "2px #ccc solid" }}>
              <div style={columnStyle}>

                <div style={fieldStyle}>
                  <Field
                    name="buildings"
                    label="Buildings"
                    options={props.buildings}
                    type="select"
                    field={"serialNumber"}
                    onChange={handleSelectBuildingsChange}
                    component={MultipleSelect}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="CIN"
                    label="CIN"
                    placeholder="Type your CIN"
                    component={TextInput}
                    validate={composeValidators(required)}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="name"
                    label="Name"
                    placeholder="Type your name"
                    component={TextInput}
                    validate={composeValidators(required, validateName)}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="address"
                    label="Address"
                    placeholder="Type your address"
                    component={TextInput}
                    validate={required}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="zipcode"
                    label="Zip Code"
                    placeholder="Type your address"
                    component={TextInput}
                    validate={required}
                  ></Field>
                </div>
              </div>

              <div style={columnStyle}>
                <div style={fieldStyle}>
                  <Field
                    name="contact"
                    label="Contact"
                    placeholder="Type contact name"
                    component={TextInput}
                    validate={required}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="phone"
                    label="Phone"
                    placeholder="Type phone number"
                    component={NumberInput}
                    validate={composeValidators(required, validatePhone)}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="email"
                    label="Email"
                    placeholder="Type an email"
                    component={TextInput}
                    validate={composeValidators(required, validateEmail)}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="obs"
                    label="Observations"
                    placeholder="Write some details"
                    component={TextArea}
                  ></Field>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addCompany: addCompanyAction,
      editCompany: editCompanyAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(CompanyForm);