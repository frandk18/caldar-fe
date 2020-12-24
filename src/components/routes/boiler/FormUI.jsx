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
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Form(props) {
  const boiler = props.boilers.filter((boiler) => boiler._id.$oid === props.id);

  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? boiler[0]._id.$oid : null,
    },
    serialNumber: props.editing ? boiler[0].serialNumber : "",
    type: props.editing ? boiler[0].type : [],
    manufacturingDate: props.editing
      ? boiler[0].manufaturingDate
      : "12/09/2018",
    status: props.editing ? boiler[0].status : "",
    building: props.editing ? boiler[0].building : [],
    obs: props.editing ? boiler[0].obs : "",
  });

  const forDate = newOne.manufacturingDate.split("/");
  const birth = new Date(forDate[2], forDate[0] - 1, forDate[1]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setNewOne({ ...newOne, [name]: value });
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

  const [selectedDate, setSelectedDate] = useState(birth);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const y = date.getFullYear();
    newOne.dateOfBirth = mm + "/" + dd + "/" + y;
  };

  const [buildingId, setBuildingId] = useState(newOne.building);
  const handleSelectBuildingChange = (e) => {
    setBuildingId(e.target.value);
    newOne.building = e.target.value;
  };

  const types = ["A", "B", "C", "D"];
  const [boilerType, setBoilerType] = useState(newOne.type);
  const handleSelectTypeChange = (e) => {
    setBoilerType(e.target.value);
    newOne.types = e.target.value;
  };

  const status = ["available", "working", "reserved"];
  const [boilerStatus, setBoilerStatus] = useState(newOne.status);
  const handleSelectStatusChange = (e) => {
    setBoilerStatus(e.target.value);
    newOne.status = e.target.value;
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
                    {props.editing ? "Edit Boiler" : "New Boiler"}
                  </h1>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className={classes.column}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          style={{ margin: 8 }}
                          margin="normal"
                          label="Manufacturing Date"
                          format="MM/dd/yyyy"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </MuiPickersUtilsProvider>

                      <FormControl
                        className={classes.formControl}
                        style={{ margin: 8 }}
                      >
                        <InputLabel>Type</InputLabel>
                        <Select
                          labelId="demo-mutiple-checkbox-label"
                          id="type"
                          value={boilerType}
                          onChange={handleSelectTypeChange}
                          input={<Input />}
                          MenuProps={MenuProps}
                        >
                          {types.map((type) => (
                            <MenuItem key={type} value={type}>
                              <ListItemText primary={type} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl
                        className={classes.formControl}
                        style={{ margin: 8 }}
                      >
                        <InputLabel>Status</InputLabel>
                        <Select
                          labelId="demo-mutiple-checkbox-label"
                          id="status"
                          value={boilerStatus}
                          onChange={handleSelectStatusChange}
                          input={<Input />}
                          MenuProps={MenuProps}
                        >
                          {status.map((status) => (
                            <MenuItem key={status} value={status}>
                              <ListItemText primary={status} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl
                        className={classes.formControl}
                        style={{ margin: 8 }}
                      >
                        <InputLabel>Building</InputLabel>
                        <Select
                          labelId="building"
                          id="building"
                          value={buildingId}
                          onChange={handleSelectBuildingChange}
                          input={<Input />}
                          MenuProps={MenuProps}
                        >
                          {props.buildings.map((building, index) => (
                            <MenuItem key={index} value={building.name}>
                              {building.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>

                    <div className={classes.column}>
                      <TextField
                        name="serialNumber"
                        defaultValue={newOne.serialNumber}
                        onChange={handleChange}
                        label="Serial Number"
                        placeholder="44444"
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
