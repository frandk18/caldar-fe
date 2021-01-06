import { Form, Field } from "react-final-form";
import React, { useState } from "react";
import {
    required,
    composeValidators,
    validateName,
    validateEmail,
    validatePhone,
    validateBoilerType,
    validateStdMaintainance,
} from "../../../utils/validations";
import TextInput from "../../shared/TextInput.jsx";
import NumberInput from "../../shared/NumberInput.jsx";
import DateInput from "../../shared/DateInput.jsx";
import TextArea from "../../shared/TextArea.jsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function BoilerTypeForm(props) {
    const boilerType = props.boilerTypes.filter(
        (boilerType) => boilerType._id === props.id
    );

    const [newOne, setNewOne] = useState({
        boilerType: props.editing ? boilerType[0].boilerType : "",
        stdMaintainance: props.editing ? boilerType[0].stdMaintainance : "",
        obs: props.editing ? boilerType[0].obs : "",
    });
    const _id = props.editing ? boilerType[0]._id : null;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmitBoilerType = async (values) => {
      await sleep(300);
      window.alert(JSON.stringify(values, 0, 2));
      console.log(values);
      values.services = newOne.services;
      console.log(values);
      props.addEdit(values, _id);
    };

    return (
        <Form
            onSubmit={onSubmitBoilerType}
            initialValues={{
                boilerType: newOne.boilerType,
                stdMaintainance: newOne.stdMaintainance,
                obs: newOne.obs,
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
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Field
                            name="boilerType"
                            component={TextInput}
                            placeholder="Enter the boiler model"
                            label="Boiler Model:"
                            validate={composeValidators(required, validateBoilerType)}
                        />
                        <Field
                            name="stdMaintainance"
                            component={TextInput}
                            placeholder="Type the standard maintainance time"
                            label="Standard maintainance time:"
                            validate={composeValidators(required, validateStdMaintainance)}
                        />
                        <Field
                            name="obs"
                            component={TextInput}
                            placeholder="Type the observation"
                            label="Observation:"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
            />
        );
}

export default BoilerTypeForm;
