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
    (company) => company._id === props.id
  );

  const [newOne, setNewOne] = useState({
    buildings: props.editing
    ? company[0].buildings === undefined
      ? ""
      : company[0].buildings
    : "",
    CIN: props.editing ? company[0].CIN : "",
    name: props.editing ? company[0].name : "",
    address: props.editing ? company[0].address : "",
    zipcode: props.editing ? company[0].zipcode : "",
    contact: props.editing ? company[0].contact : "",
    phone: props.editing ? company[0].phone : "",
    email: props.editing ? company[0].email : "",
    obs: props.editing ? company[0].obs : "",
  });
  const _id = props.editing ? company[0]._id : null;

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setNewOne({
      ...newOne,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addEdit(newOne, _id);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        overflow: "hide",
      },
    },
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

  const buildingId = [];
  const buildingSN = [];

  newOne.buildings.forEach((value) => {
    const building = props.buildings.filter((building) => building._id === value);
    buildingSN.push(building[0].serialNumber);
  });
  const [buildingSerialNumber, setBuildingSerialNumber] = useState(
    props.editing ? buildingSN : []
  );

  const handleSelectBuildingsChange = (e) => {
    setBuildingSerialNumber(e.target.value);
    e.target.value.forEach((value) => {
      const building = props.buildings.filter(
        (building) => building.serialNumber === value
      );
      buildingId.push(building[0]._id);
    });
    newOne.buildings = buildingId;
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
                      <FormControl
                        className={classes.formControl}
                        style={{ margin: 8 }}
                      >
                        <InputLabel>Buildings</InputLabel>
                        <Select
                          labelId="buildings"
                          id="buildings"
                          value={buildingSerialNumber}
                          multiple
                          onChange={handleSelectBuildingsChange}
                          input={<Input />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {props.buildings.map((building) => (
                            <MenuItem
                              key={building._id}
                              value={building.serialNumber}
                            >
                              <Checkbox
                                checked={
                                  buildingSerialNumber.indexOf(
                                    building.serialNumber
                                  ) > -1
                                }
                              />
                              <ListItemText primary={building.serialNumber} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <TextField
                        name="CIN"
                        defaultValue={newOne.CIN}
                        onChange={handleChange}
                        label="CIN"
                        placeholder="444565"
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
                        name="address"
                        defaultValue={newOne.address}
                        onChange={handleChange}
                        label="Address"
                        placeholder="Balcarce 54"
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
                        placeholder="4444"
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
                        name="email"
                        defaultValue={newOne.email}
                        onChange={handleChange}
                        label="Email"
                        placeholder="example@something.com"
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