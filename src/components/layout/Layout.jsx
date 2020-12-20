import React from "react";
//import Header from "./Header.jsx";
//import NavBar from "./NavBar.jsx";
//import Header2 from "./Header2.jsx";
import NavBar2 from "./NavBar2.jsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/*<Header2 />*/}
      <NavBar2 />
    </div>
  );
}

export default Layout;
