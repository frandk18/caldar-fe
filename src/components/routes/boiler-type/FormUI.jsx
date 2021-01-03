import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Form(props) {
  const boilerType = props.boilerTypes.filter(
    (boilerType) => boilerType._id === props.id
  );

  const [newOne, setNewOne] = useState({
    boilerType: props.editing ? boilerType[0].boilerType : "",
    stdMaintainance: props.editing ? boilerType[0].stdMaintainance : "",
    obs: props.editing ? boilerType[0].obs : "",
  });
  const _id = props.editing ? boilerType[0]._id : null;

  const handleChange = (evt) => {
    const value = evt.target.value;
    setNewOne({
      ...newOne,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEdit(newOne, _id);
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
                  <h1 style={{ margin: 8, textAlign: "center" }}>
                    {props.editing ? "Edit Boiler Type" : "New Boiler Type"}
                  </h1>

                  <TextField
                    name="boilerType"
                    defaultValue={newOne.boilerType}
                    onChange={handleChange}
                    label="Model"
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
                    name="stdMaintainance"
                    type="number"
                    defaultValue={newOne.stdMaintainance}
                    onChange={handleChange}
                    label="Standard Maintainance Required Time"
                    placeholder="10"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    className={classes.input}
                  />

                  <TextField
                    name="obs"
                    defaultValue={newOne.obs}
                    onChange={handleChange}
                    label="Observation"
                    placeholder="Write some details"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
