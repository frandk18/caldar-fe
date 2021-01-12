import { Form, Field } from "react-final-form";
import React from "react";
import TextInput from "../../shared/TextInput.jsx";
import {
  required,
  composeValidators,
  validateEmail,
} from "../../../utils/validations.js";
import { login as loginAction } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    console.log("LOGIN");
    //login(values);
  };

  return (
    <Form
      onSubmit={onSubmitLogin}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <div>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={formStyle}
          >
            <legend style={{ margin: 8 }}>{"Login"}</legend>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "2px #ccc solid",
              }}
            >
              <div style={fieldStyle}>
                <Field
                  name="email"
                  label="Email"
                  placeholder="Type your email"
                  component={TextInput}
                  validate={composeValidators(required, validateEmail)}
                ></Field>
              </div>

              <div style={fieldStyle}>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Type your password"
                  component={TextInput}
                  validate={required}
                ></Field>
              </div>
            </div>

            <div style={btnContainer}>
              <button style={btnStyle} type="submit">
                Login
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

//const columnStyle = {
//  display: "flex",
//  flexDirection: "column",
//  justifyContent: "space-between",
//  margin: "20px",
//};

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
      login: loginAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Login);
