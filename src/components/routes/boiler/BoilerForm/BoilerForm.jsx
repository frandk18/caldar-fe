import { Form, Field } from "react-final-form";
import { React, useState } from "react";
import SimpleSelect from "../../../shared/SimpleSelect.jsx";
import TextArea from "../../../shared/TextArea.jsx";
import TextInput from "../../../shared/TextInput.jsx";
import NumberInput from "../../../shared/NumberInput.jsx";
import DateInput from "../../../shared/DateInput.jsx";
import {
  required,
  composeValidators,
  validateName,
  validateEmail,
  validatePhone,
} from "../../../../utils/validations.js";
import {
  addBoiler as addBoilerAction,
  editBoiler as editBoilerAction,
} from "../../../../redux/actions/boilersActions";
import { closeModal as closeModalAction } from "../../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const BoilerForm = (props) => {
  const boiler = props.boilers.filter((boiler) => boiler._id === props.id);

  const [newOne] = useState({
    building: props.editing
      ? boiler[0].building === undefined
        ? ""
        : boiler[0].building
      : "",
    serialNumber: props.editing ? boiler[0].serialNumber : "",
    type: props.editing ? boiler[0].type : "",
    manufacturingDate: props.editing
      ? boiler[0].manufacturingDate
      : "12/09/2018",
    installationDate: "",
    status: props.editing ? boiler[0].status : "",
    obs: props.editing ? boiler[0].obs : "",
  });

  const id = props.editing ? boiler[0]._id : null;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Handle Building Field
  const [buildingId, setBuildingId] = useState(
    props.editing ? boiler[0].building : ""
  );
  const handleSelectBuildingChange = (e) => {
    setBuildingId(e.target.value);
  };

  // Handle Date Format
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
  const newManufacturingDate = normalizeDate(newOne.manufacturingDate);
  const newInstallationDate = normalizeDate(newOne.installationDate);

  // Handle Type Field
  const types = ["A", "B", "C", "D"];
  const [boilerType, setBoilerType] = useState(newOne.type);
  const handleSelectTypeChange = (e) => {
    setBoilerType(e.target.value);
    newOne.type = e.target.value;
  };

  // Handle Status Field
  const status = ["available", "working", "reserved", "need repair"];
  const [boilerStatus, setBoilerStatus] = useState(newOne.status);
  const handleSelectStatusChange = (e) => {
    setBoilerStatus(e.target.value);
    newOne.status = e.target.value;
  };

  const handleSubmit = async (values) => {
    await sleep(100);
    window.alert(JSON.stringify(values, 0, 2));
    console.log(values);
    if (!props.editing) {
      props.addBoiler(values);
      props.closeModal();
    } else {
      props.editBoiler(values, id);
      props.closeModal();
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        building: buildingId,
        serialNumber: newOne.serialNumber,
        type: newOne.type,
        manufacturingDate: newManufacturingDate,
        installationDate: newInstallationDate,
        status: newOne.status,
        obs: newOne.obs,
      }}
      onChange={{
        building: handleSelectBuildingChange,
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
              {props.editing ? "Edit Boiler" : "New Boiler"}
            </legend>

            <div style={{ display: "flex", border: "2px #ccc solid" }}>
              <div style={columnStyle}>
                <div style={fieldStyle}>
                  <Field
                    name="manufacturingDate"
                    label="Manufacturing Date"
                    component={DateInput}
                    validate={required}
                  />
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="type"
                    label="Type"
                    options={props.boilers}
                    field={"name"}
                    onChange={handleSelectBuildingChange}
                    component={SimpleSelect}
                  />
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="status"
                    label="Status"
                    options={props.boilers}
                    field={"name"}
                    onChange={handleSelectBuildingChange}
                    component={SimpleSelect}
                  />
                </div>

                <div style={fieldStyle}>
                  <Field
                    name="building"
                    label="Building"
                    options={props.buildings}
                    field={"name"}
                    onChange={handleSelectBuildingChange}
                    component={SimpleSelect}
                  />
                </div>
              </div>

              <div style={columnStyle2}>
                <div style={fieldStyle}>
                  <Field
                    name="serialNumber"
                    label="Serial Number"
                    placeholder="Type serial number"
                    component={NumberInput}
                    validate={required}
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

const columnStyle2 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
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
      addBoiler: addBoilerAction,
      editBoiler: editBoilerAction,
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(BoilerForm);
