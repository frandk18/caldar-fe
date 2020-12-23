import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Form(props) {
  const company = props.companies.filter(
    (company) => company._id.$oid === props.id
  );
  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? company[0]._id.$oid : null,
    },
    CIN: props.editing ? company[0].CIN : "",
    name: props.editing ? company[0].name[0] : "",
    email: props.editing ? company[0].email : "",
    phone: props.editing ? company[0].phone : "",
    address: props.editing ? company[0].address : "",
    zipcode: props.editing ? company[0].zipcode : "",
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

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      widht: "25%",
    },
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
      padding: theme.spacing(2, 4, 3),
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
                  <h1 style={{ margin: 8 }}>Add new Company</h1>
                  <TextField
                    name="CIN"
                    defaultValue={newOne.CIN}
                    onChange={handleChange}
                    label="CIN"
                    style={{ margin: 8 }}
                    placeholder="1234"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    name="name"
                    defaultValue={newOne.name}
                    onChange={handleChange}
                    label="Name"
                    style={{ margin: 8 }}
                    placeholder="Marcos"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <TextField
                        name="email"
                        defaultValue={newOne.email}
                        onChange={handleChange}
                        label="Email"
                        style={{ margin: 8 }}
                        placeholder="marcos@gmail.com"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  ></div>
                  </div>
                  <TextField
                    name="phone"
                    defaultValue={newOne.phone}
                    onChange={handleChange}
                    label="Phone"
                    style={{ margin: 8 }}
                    placeholder="55555555"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    name="address"
                    defaultValue={newOne.address}
                    onChange={handleChange}
                    label="Address"
                    style={{ margin: 8 }}
                    placeholder="Balcarce 54"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    name="zipcode"
                    defaultValue={newOne.zipcode}
                    onChange={handleChange}
                    label="zipcode"
                    style={{ margin: 8 }}
                    placeholder="Avenida siempre viva 608"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                      }}
                    variant="outlined"
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