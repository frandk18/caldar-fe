import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
//import AppBar from '@material-ui/core/AppBar';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
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
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  /*root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },*/
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavBar() {
  const classes = useStyles();
  const icons = [
    <PersonIcon />,
    <ApartmentIcon />,
    <DomainIcon />,
    <WhatshotIcon />,
    <DynamicFeedIcon />,
    <BuildIcon />,
    <BarChartIcon />,
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
          {[
            "Technicians",
            "Buildings",
            "Companies",
            "Boilers",
            "Boiler Types",
            "Services",
            "Reports",
          ].map((text, index) => (
            <ListItem button key={text} component={Link} to="/technician">
              {/*<ListItemIcon>{index % 2 === 0 ? <PersonIcon /> : <ApartmentIcon />}</ListItemIcon>*/}
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {/*<Divider />*/}
        {/*<List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </List>*/}
      </div>
    </Drawer>
  );
}

export default NavBar;

/*
import React from "react";
import { Link } from "react-router-dom";
import "../css/SideBar.css";

function NavBar() {
  return (
    <div className="SB-div">
      <ul>
        <Link className="SB-link" to="/">
          <li>Home</li>
        </Link>

        <Link className="SB-link" to="/boiler">
          <li>Boilers</li>
        </Link>

        <Link className="SB-link" to="/boiler-models">
          <li>Boiler Models</li>
        </Link>

        <Link className="SB-link" to="/companies">
          <li>Companies</li>
        </Link>

        <Link className="SB-link" to="/building">
          <li>Buildings</li>
        </Link>

        <Link className="SB-link" to="/technician">
          <li>Technicians</li>
        </Link>

        <Link className="SB-link" to="/reports">
          <li>Reports</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
*/
