import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Form(props) {
  const boilerType = props.boilerType.filter(
    (boilerT) => boilerT._id.$oid === props.id
  );

  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? boilerType[0]._id.$oid : null,
    },
    model: props.editing ? boilerType[0].model : "",
    std_maintainance: props.editing ? boilerType[0].std_maintainance : "",
    observation: props.editing ? boilerType[0].observation : "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setNewOne({
      ...newOne,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEdit(newOne);
  };

  const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      margin: theme.spacing(2),
    },
    input: {
      boxSizing: "border-box",
      margin: "8",
    },
  }));

  const Container = {
    width: "100%",
  };

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.showForm}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.showForm}>
          <div className={classes.paper}>
            <div style={Container}>
              <div className={classes.root}>
                <div>
                  <h1 style={{ margin: 8 }}>
                    {props.editing ? "Edit Boiler" : "New Boiler"}
                  </h1>
                  <TextField
                    name="model"
                    defaultValue={newOne.model}
                    onChange={handleChange}
                    label="Model"
                    style={{ margin: 8 }}
                    placeholder="A"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    className={classes.input}
                  />
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    name="std_maintainance"
                    label="Standar Maintainance Required Time"
                    multiline
                    rows={4}
                    defaultValue={newOne.std_maintainance}
                    variant="outlined"
                    className={classes.input}
                  />
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    name="observation"
                    label="Observation"
                    multiline
                    rows={4}
                    defaultValue={newOne.observation}
                    variant="outlined"
                    className={classes.input}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={props.toggleForm}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Form;
