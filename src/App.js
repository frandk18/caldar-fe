import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/routes/home/Home.jsx";
import Technician from "./components/routes/technician/Technician.jsx";
import Building from "./components/routes/building/Building.jsx";
import Company from "./components/routes/company/Company.jsx";
import Boiler from "./components/routes/boiler/Boiler.jsx";
import BoilerType from "./components/routes/boiler-type/BoilerType.jsx";
import Login from "./components/routes/login/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
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

export default App;
