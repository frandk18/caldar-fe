import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
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
  const technician = props.technicians.filter(
    (technician) => technician._id.$oid === props.id
  );
  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? technician[0]._id.$oid : null,
    },
    fullname: props.editing ? technician[0].fullname : "",
    knowledge: props.editing
      ? JSON.parse(JSON.stringify(technician[0].knowledge))
      : [],
    email: props.editing ? technician[0].email : "",
    phone: props.editing ? technician[0].phone : "",
    address: props.editing ? technician[0].address : "",
    dateOfBirth: props.editing ? technician[0].dateOfBirth : "12/09/2018",
    obs: props.editing ? technician[0].obs : "",
  });
  const forDate = newOne.dateOfBirth.split("/");
  const birth = new Date(forDate[2], forDate[0] - 1, forDate[1]);

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
    /*roota: {
      display: "flex",
      flexWrap: "wrap",
      width: "25%",
    },Remove, but check first, cause it have two root class*/
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

  const [selectedDate, setSelectedDate] = useState(birth);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const y = date.getFullYear();
    newOne.dateOfBirth = mm + "/" + dd + "/" + y;
  };

  const names = ["A", "B", "C", "D"];
  const [personName, setPersonName] = useState(newOne.knowledge);
  const handleSelectChange = (event) => {
    setPersonName(event.target.value);
    newOne.knowledge = event.target.value;
  };

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
                    {props.editing ? "Edit Technician" : "Add new Technician"}
                  </h1>
                  <TextField
                    name="fullname"
                    defaultValue={newOne.fullname}
                    onChange={handleChange}
                    label="Full name"
                    style={{ margin: 8 }}
                    placeholder="John Doe"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                  <TextField
                    name="email"
                    defaultValue={newOne.email}
                    onChange={handleChange}
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="example@something.com"
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
                    <FormControl
                      className={classes.formControl}
                      style={{ margin: 8 }}
                    >
                      <InputLabel>Knowledge</InputLabel>
                      <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="knowledge"
                        multiple
                        value={personName}
                        onChange={handleSelectChange}
                        input={<Input />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        style={{ margin: 8 }}
                        margin="normal"
                        label="Birthdate"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
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
                    fullWidth
                    onChange={handleChange}
                    style={{ margin: 8 }}
                    name="obs"
                    label="Obs"
                    multiline
                    rows={4}
                    defaultValue={newOne.obs}
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
