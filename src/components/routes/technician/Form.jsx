import { Form, Field } from "react-final-form";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
/*
export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}*/

const MyForm = () => {
  const classes = useStyles();
  return (
    <Form
      onSubmit={() => {
        alert("Submitting!");
      }}
    >
      {({ handleSubmit }) => (
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input placeholder="Full name" type="text" />
          <TextField
            id="standard-basic"
            label="Standard"
            placeholder="HOLIIIS"
          />
          <input placeholder="Email" type="text" />
          <input placeholder="Address" type="text" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default MyForm;
