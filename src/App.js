import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Technician from "./components/routes/technician/Technician.jsx";
import Building from "./components/routes/building/Building.jsx";
import Company from "./components/routes/company/Company";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/" exact />
        <Route path="/technician" component={Technician} />
        <Route path="/building" component={Building} />
        <Route path="/company" component={Company} />
        <Route path="/boiler" />
        <Route path="/boiler-type" />
        <Route path="/service" />
        <Route path="/reports" />
      </Switch>
      <Layout />
    </Router>
  );
}

export default App;
