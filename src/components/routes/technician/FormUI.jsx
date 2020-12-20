import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
}));

const Container = {
  width: "50%",
};
export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div style={Container}>
      <div className={classes.root}>
        <div>
          <TextField
            id="outlined-full-widsdfth"
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
            id="outlined-full-width"
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
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Nosdfne"
            id="margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
          />
          <TextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label="None"
            id="filled-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="filled"
          />
          <TextField
            label="Dense"
            id="filled-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="filled"
          />
          <TextField
            label="Normdfgal"
            id="filled-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="outlined-full-wdfgidth"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            label="Noaaane"
            id="outlined-margin-none"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            variant="outlined"
          />
          <TextField
            label="Densffse"
            id="outlined-margin-dense"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Norsdfsdgmal"
            id="outlined-margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}
