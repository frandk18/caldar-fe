import React from "react";
import { Link } from "react-router-dom";
import "../css/SideBar.css";

function SideBar() {
  return (
    <div class="SB-div">
      <ul>
        <Link class="SB-link" to="/">
          <li>Home</li>
        </Link>

        <Link class="SB-link" to="/boiler">
          <li>Boiler</li>
        </Link>
        <Link class="SB-link" to="/boiler-models">
          <li>Boiler Models</li>
        </Link>
        <Link class="SB-link" to="/companies">
          <li>Companies</li>
        </Link>
        <Link class="SB-link" to="/building">
          <li>Building</li>
        </Link>
        <Link class="SB-link" to="/technician">
          <li>Technicians</li>
        </Link>
        <Link class="SB-link" to="/reports">
          <li>Reports</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
