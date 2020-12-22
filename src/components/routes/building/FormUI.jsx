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
  //width: "auto",
};
export default function LayoutTextFields(props) {
  const classes = useStyles();

  return (
    <div style={Container}>
      <div className={classes.root}>
        {props.labels.map((label) => (
          <TextField
            id="outlined-full-widsdfth"
            label={label}
            style={{ margin: 8 }}
            //placeholder="John Doe"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        ))}
      </div>
    </div>
  );
}
