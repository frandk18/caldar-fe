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
import { makeStyles } from "@material-ui/core/styles";
import background from "../../../img/login2.jpg";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://radiumrocket.com/">
        Radium Rocket
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    console.log("LOGIN");
    console.log(values);
    login(values);
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Form
            onSubmit={onSubmitLogin}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <div style={formStyle}>
                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className={classes.form}
                >
                  <div style={fieldStyle}>
                    <Field
                      name="email"
                      label="Email Address"
                      //placeholder="Type your email"
                      component={TextInput}
                      validate={composeValidators(required, validateEmail)}
                    ></Field>
                  </div>

                  <div style={fieldStyle}>
                    <Field
                      name="password"
                      label="Password"
                      type="password"
                      //placeholder="Type your password"
                      component={TextInput}
                      validate={required}
                    ></Field>
                  </div>

                  <button
                    style={btnStyle}
                    disabled={submitting || pristine}
                    type="submit"
                    className={classes.submit}
                  >
                    Login
                  </button>

                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </div>
            )}
          />
        </div>
      </Grid>
    </Grid>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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

/*const btnContainer = {
  display: "flex",
  margin: "10px 0px",
};*/

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
