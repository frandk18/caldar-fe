import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import SideBar from "./components/layout/SideBar.jsx";
import Technician from "./components/routes/technician/Technician.jsx";
import Building from "./components/routes/building/Building.jsx";
import Company from "./components/routes/company/Company";
import "./App.css";

function App() {
  return (
    <div>
      {/*<Header />*/}
      <div className="section-container">
        <Router>
          <NavBar />
          <SideBar />
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
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
