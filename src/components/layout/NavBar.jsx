import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import ApartmentIcon from "@material-ui/icons/Apartment";
import DomainIcon from "@material-ui/icons/Domain";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import BuildIcon from "@material-ui/icons/Build";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

function NavBar() {
  const classes = useStyles();
  const entities = [
    "Technicians",
    "Buildings",
    "Companies",
    "Boilers",
    "Boiler Types",
    "Services",
    "Reports",
  ];
  const icons = [
    <PersonIcon />,
    <ApartmentIcon />,
    <DomainIcon />,
    <WhatshotIcon />,
    <DynamicFeedIcon />,
    <BuildIcon />,
    <BarChartIcon />,
  ];
  const links = [
    "/technician",
    "/building",
    "/company",
    "/boiler",
    "/boiler-type",
    "/service",
    "/reports",
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {entities.map((text, index) => (
            <ListItem button key={text} component={Link} to={links[index]}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default NavBar;
