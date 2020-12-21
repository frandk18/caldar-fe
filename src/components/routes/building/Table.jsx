import React from "react";
import Row from "./Row.jsx";

function Table(props) {
  const buildings = props.buildings.map((building) => (
    <Row
      key={building._id.$oid}
      building={building}
      toggleForm={props.toggleForm}
      captureId={props.captureId}
      delItem={props.delItem}
    />
  ));

  return (
    <div>
      <button
        style={btnStyle}
        onClick={() => {
          props.toggleForm();
          props.captureId(null);
        }}
      >
        New Building
      </button>
      <table style={tableStyle}>
        <thead style={headerStyle}>
          <tr>
            <th>Company</th>
            <th>Name</th>
            <th>Address</th>
            <th>Zip Code</th>
            <th>Contact</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{buildings}</tbody>
      </table>
    </div>
  );
}

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  background: "#fff",
  padding: "4px",
  marginBottom: "10px",
  borderWidth: "1px",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
};

const headerStyle = {
  background: "#708DA6",
  color: "#fff",
  lineHeight: "40px",
};

const tableStyle = {
  border: "1px solid gray",
  textAlign: "center",
};

export default Table;
