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
  const building = props.buildings.filter(
    (building) => building._id.$oid === props.id
  );

  const [newOne, setNewOne] = useState({
    _id: {
      $oid: props.editing ? building[0]._id.$oid : null,
    },
    company: props.editing ? building[0].company : "",
    boilers: props.editing ? building[0].boilers : [],
    name: props.editing ? building[0].name : "",
    address: props.editing ? building[0].address : "",
    zipcode: props.editing ? building[0].zipcode : "",
    contact: props.editing ? building[0].contact : "",
    phone: props.editing ? building[0].phone : "",
    email: props.editing ? building[0].email : "",
    obs: props.editing ? building[0].obs : "",
  });

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

  const [companyName, setCompanyName] = useState(newOne.company);
  const handleSelectCompanyChange = (e) => {
    setCompanyName(e.target.value);
    newOne.company = e.target.value;
  };

  const [boilerId, setBoilerId] = useState(newOne.boilers);
  const handleSelectBoilersChange = (e) => {
    setBoilerId(e.target.value);
    newOne.boilers = e.target.value;
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
                    {props.editing ? "Edit Building" : "New Building"}
                  </h1>

                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div className={classes.column}>
                      <FormControl
                        className={classes.formControl}
                        style={{ margin: 8 }}
                      >
                        <InputLabel>Company</InputLabel>
                        <Select
                          labelId="company"
                          id="company"
                          value={companyName}
                          onChange={handleSelectCompanyChange}
                          input={<Input />}
                          MenuProps={MenuProps}
                        >
                          {props.buildings.map((building, index) => (
                            <MenuItem key={index} value={building.company}>
                              {building.company}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl
                        className={classes.formControl}
                        style={{ margin: 8 }}
                      >
                        <InputLabel>Boilers</InputLabel>
                        <Select
                          labelId="boilers"
                          id="boilers"
                          value={boilerId}
                          multiple
                          onChange={handleSelectBoilersChange}
                          input={<Input />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {props.boilers.map((boiler) => (
                            <MenuItem
                              key={boiler.serialNumber}
                              value={boiler.serialNumber}
                            >
                              <Checkbox
                                checked={
                                  boilerId.indexOf(boiler.serialNumber) > -1
                                }
                              />
                              <ListItemText primary={boiler.serialNumber} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

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
