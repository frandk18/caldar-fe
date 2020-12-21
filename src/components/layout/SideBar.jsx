import React from "react";
import { Link } from "react-router-dom";
import "../css/SideBar.css";

function SideBar() {
  return (
    <div className="SB-div">
      <ul>
        <Link className="SB-link" to="/">
          <li>Home</li>
        </Link>

        <Link className="SB-link" to="/boiler">
          <li>Boilers</li>
        </Link>

        <Link className="SB-link" to="/boiler-type">
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

export default SideBar;
