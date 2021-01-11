import { Form, Field } from "react-final-form";
import { React, useState } from "react";
import MultipleSelect from "../../../shared/MultipleSelect.jsx";
import TextArea from "../../../shared/TextArea.jsx";
import {
    required,
    composeValidators,
    validateStdMaintainance,
    validateBoilerType,
} from "../../../../utils/validations.js";
import {
    addBoilerType as addBoilerTypeAction,
    editBoilerType as editBoilerTypeAction,
} from "../../../../redux/actions/boilerTypeActions";
import { closeModal as closeModalAction } from "../../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const BoilerTypeForm = (props) => {
    const boilerType = props.boilerType.filter(
        (boilerT) => boilerT._id === props.id
    );

    const [newOne] = useState({
        boilerType: props.editing ? boilerType[0].boilerType : [],
        stdMaintainance: props.editing ? boilerType[0].stdMaintainance : "",
        obs: props.editing ? boilerType[0].obs : "",
        technician: props.editing ? boilerType[0].technician : [],
    });
    const id = props.editing ? boilerType[0]._id : null;
    console.log(newOne)
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



    // Handle Technician Field
    const [technicianId, setTechnicianId] = useState(
        props.editing ? boilerType[0].technician : ""
    );
    const handleSelectTechnicianChange = (e) => {
        setTechnicianId(e.target.value);
    };

    const handleSubmit = async (values) => {
        await sleep(100);
        window.alert(JSON.stringify(values, 0, 2));
        console.log(values);
        if (!props.editing) {
            props.addBoilerType(values);
            props.closeModal();
        } else {
            props.editBoilerType(values, id);
            props.closeModal();
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={{
                technician: technicianId,
                boilerType: newOne.boilerType,
                stdMaintainance: newOne.stdMaintainance,
                obs: newOne.obs,
            }}
            onChange={{
                technician: handleSelectTechnicianChange,
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
                            {props.editing ? "Edit Boiler Type" : "New Boiler Type"}
                        </legend>

                        <div style={{ display: "flex", border: "2px #ccc solid" }}>
                            <div style={columnStyle}>

                                <div style={fieldStyle}>
                                    <Field
                                        name="boilerType"
                                        label="Boiler Model"
                                        placeholder="Detail which model boiler it is"
                                        component={TextArea}
                                        validate={composeValidators(required, validateBoilerType)}
                                    ></Field>
                                </div>

                                <div style={fieldStyle}>
                                    <Field
                                        name="stdMaintainance"
                                        label="Standard mantainance required time"
                                        placeholder="Detail the number of hours required of hours to repare this model"
                                        component={TextArea}
                                        validate={composeValidators(required, validateStdMaintainance)}
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

                                <div style={fieldStyle}>
                                    <Field
                                        name="technician"
                                        label="Technician"
                                        options={props.technicians}
                                        field={"fullname"}
                                        type="select"
                                        onChange={handleSelectTechnicianChange}
                                        component={MultipleSelect}
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
            addBoilerType: addBoilerTypeAction,
            editBoilerType: editBoilerTypeAction,
            closeModal: closeModalAction,
        },
        dispatch
    );
};

export default connect(null, mapDispatchToProps)(BoilerTypeForm);