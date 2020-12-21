import React from "react";
import Row from "./Row.jsx";

function Table(props) {
  const technicians = props.technicians.map((technician) => (
    <Row
      key={technician._id.$oid}
      technician={technician}
      toggleForm={props.toggleForm}
      captureId={props.captureId}
      delItem={props.delItem}
    />
  ));
  return (
    <div>
      <button
        onClick={(event) => {
          props.toggleForm();
          props.captureId(null);
        }}
      >
        New Technician
      </button>
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Knowledge</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={bodyContainer}>{technicians}</tbody>
      </table>
    </div>
  );
}
const bodyContainer = {
  textAlign: "left",
};

export default Table;
