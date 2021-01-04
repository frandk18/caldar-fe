import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Form(props) {
  const company = props.companies.filter((company) => company._id === props.id);
  const [newOne, setNewOne] = useState({
    CIN: props.editing ? company[0].CIN : "",
    name: props.editing ? company[0].name : "",
    email: props.editing ? company[0].email : "",
    phone: props.editing ? company[0].phone : "",
    address: props.editing ? company[0].address : "",
    zipcode: props.editing ? company[0].zipcode : "",
    contact: props.editing ? company[0].contact : "",
    obs: props.editing ? company[0].obs : "",
  });
  const _id = props.editing ? company[0]._id : null;

  const handleChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setNewOne({
      ...newOne,
      [name]: value,
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ margin: 8 }}>
                    {props.editing ? "Edit Company" : "New Company"}
                  </h1>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className={classes.column}>
                      <TextField
                        name="CIN"
                        defaultValue={newOne.CIN}
                        onChange={handleChange}
                        label="CIN"
                        placeholder="123546"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />

                      <TextField
                        name="name"
                        defaultValue={newOne.name}
                        onChange={handleChange}
                        label="Name"
                        placeholder="Google"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />

                      <TextField
                        name="email"
                        defaultValue={newOne.email}
                        onChange={handleChange}
                        label="Email"
                        placeholder="marcos@gmail.com"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />

                      <TextField
                        name="address"
                        defaultValue={newOne.address}
                        onChange={handleChange}
                        label="Address"
                        placeholder="Avenida siempre viva 65"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />
                    </div>

                    <div className={classes.column}>
                      <TextField
                        name="phone"
                        defaultValue={newOne.phone}
                        onChange={handleChange}
                        label="Phone"
                        type="number"
                        placeholder="55555555"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />

                      <TextField
                        name="zipcode"
                        defaultValue={newOne.zipcode}
                        onChange={handleChange}
                        label="Zip Code"
                        placeholder="5555-32"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />

                      <TextField
                        name="contact"
                        defaultValue={newOne.contact}
                        onChange={handleChange}
                        label="Contact"
                        placeholder="John Doe"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        className={classes.input}
                      />

                      <TextField
                        name="observations"
                        defaultValue={newOne.obs}
                        onChange={handleChange}
                        label="Observations"
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
                  </div>
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
