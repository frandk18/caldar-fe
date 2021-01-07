import { Form, Field } from "react-final-form";
import { React, useState } from "react";
import SimpleSelect from "../../shared/SimpleSelect.jsx";
import MultipleSelect from "../../shared/MultipleSelect.jsx";
import TextArea from "../../shared/TextArea.jsx";
import TextInput from "../../shared/TextInput.jsx";
import NumberInput from "../../shared/NumberInput.jsx";
import {
  required,
  composeValidators,
  validateName,
  validateEmail,
  validatePhone,
} from "../../../utils/validations.js";
import {
  addBuilding as addBuildingAction,
  editBuilding as editBuildingAction,
} from "../../../redux/actions/buildingsActions";
import { closeModal as closeModalAction } from "../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const BuildingForm = (props) => {
  const building = props.buildings.filter(
    (building) => building._id === props.id
  );

  const [newOne] = useState({
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

  const id = props.editing ? building[0]._id : null;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Handle Company Field
  const [companyId, setCompanyId] = useState(
    props.editing ? building[0].company : ""
  );
  const handleSelectCompanyChange = (e) => {
    setCompanyId(e.target.value);
  };

  // Handle Boiler Field
  const [boilerId, setBoilerId] = useState(
    props.editing ? building[0].boilers : []
  );
  const handleSelectBoilersChange = (e) => {
    setBoilerId(e.target.value);
  };

  const handleSubmit = async (values) => {
    await sleep(100);
    window.alert(JSON.stringify(values, 0, 2));
    console.log(values);
    if (!props.editing) {
      props.addBuilding(values);
      props.closeModal();
    } else {
      props.editBuilding(values, id);
      props.closeModal();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        company: companyId,
        boilers: boilerId,
        name: newOne.name,
        address: newOne.address,
        zipcode: newOne.zipcode,
        contact: newOne.contact,
        phone: newOne.phone,
        email: newOne.email,
        obs: newOne.obs,
      }}
      onChange={{
        company: handleSelectCompanyChange,
        boilers: handleSelectBoilersChange,
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
                <div style={fieldStyle}>
                  <Field
                    name="company"
                    label="Company"
                    options={props.companies}
                    field={"name"}
                    onChange={handleSelectCompanyChange}
                    component={SimpleSelect}
                  ></Field>
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="boilers"
                    label="Boilers"
                    options={props.boilers}
                    type="select"
                    field={"serialNumber"}
                    onChange={handleSelectBoilersChange}
                    component={MultipleSelect}
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
      addBuilding: addBuildingAction,
      editBuilding: editBuildingAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(BuildingForm);
