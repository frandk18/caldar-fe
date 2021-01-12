import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/routes/home/Home.jsx";
import Technician from "./components/routes/technician/Technician.jsx";
import Building from "./components/routes/building/Building.jsx";
import Company from "./components/routes/company/Company.jsx";
import Boiler from "./components/routes/boiler/Boiler.jsx";
import BoilerType from "./components/routes/boiler-type/BoilerType.jsx";
//import Login from "./components/routes/login/Login";
import LoginUI from "./components/routes/login/LoginUI";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthentication as setAuthenticationAction } from "./redux/actions/authActions";
import { tokenListener } from "./firebase";
import "./App.css";

function App(authenticated, setAuthentication) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthentication();
    }
  }, [setAuthentication]);

  useEffect(() => {
    tokenListener();
  }, []);

  if (authenticated.authenticated) {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/technician" component={Technician} />
            <Route path="/building" component={Building} />
            <Route path="/company" component={Company} />
            <Route path="/boiler" component={Boiler} />
            <Route path="/boiler-type" component={BoilerType} />
            <Route path="/service" />
            <Route path="/reports" />
          </Switch>
        </Layout>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginUI} />
        <Redirect path="/" to="/login" />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setAuthentication: setAuthenticationAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
