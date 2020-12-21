import React from "react";
import Row from "./Row.jsx";

function Table(props) {
  const boilerType = props.boilerType.map((boilerType) => (
    <Row
      key={boilerType._id.$oid}
      boilerType={boilerType}
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
        New Boiler Type
      </button>
      <table style={tableStyle}>
        <thead style={headerStyle}>
          <tr>
            <th>Model</th>
            <th>Standard Maintainance Time</th>
            <th>Observation</th>
          </tr>
        </thead>
        <tbody>{boilerType}</tbody>
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
