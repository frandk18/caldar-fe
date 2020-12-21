import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdCreate } from "react-icons/md";

function Row(props) {
  const {
    company,
    name,
    address,
    zipcode,
    contact,
    phone,
    email,
  } = props.building;

  return (
    <tr style={rowStyle}>
      <td style={cellStyle}>{company}</td>
      <td style={cellStyle}>{name}</td>
      <td style={cellStyle}>{address}</td>
      <td style={cellStyle}>{zipcode}</td>
      <td style={cellStyle}>{contact}</td>
      <td style={cellStyle}>{phone}</td>
      <td style={cellStyle}>{email}</td>
      <td style={cellStyle}>
        <button
          style={btnStyle}
          onClick={() => {
            props.toggleForm();
            props.captureId(props.building._id.$oid);
          }}
        >
          <MdCreate />
        </button>
      </td>
      <td style={cellStyle}>
        <button
          style={btnStyle}
          onClick={() => {
            props.delItem(props.building._id.$oid);
          }}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

const cellStyle = {
  padding: "5px 20px",
};

const rowStyle = {
  background: "#CED6DC",
  lineHeight: "25px",
  border: "1px #707070 solid",
};

const btnStyle = {
  display: "flex",
  justifyContent: "center",
  background: "#ccc",
  padding: "4px",
  margin: "0 3px",
  borderWidth: "1px",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
};

export default Row;
