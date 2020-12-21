import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Row(props) {
  const {
    fullname,
    knowledge,
    email,
    phone,
    address,
    dateOfBirth,
  } = props.technician;
  return (
    <tr style={rowContainer}>
      <td style={dataContainer}>{fullname}</td>
      <td style={dataContainer}>{knowledge}</td>
      <td style={dataContainer}>{email}</td>
      <td style={dataContainer}>{phone}</td>
      <td style={dataContainer}>{address}</td>
      <td style={dataContainer}>{dateOfBirth}</td>
      <td style={dataContainer}>
        <button
          onClick={(event) => {
            props.toggleForm();
            props.captureId(props.technician._id.$oid);
          }}
        >
          <FaEdit />
        </button>
      </td>
      <td style={dataContainer}>
        <button onClick={props.delItem.bind(this, props.technician._id.$oid)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

const rowContainer = {};

const dataContainer = {
  padding: "10px",
  border: "1px solid black",
  width: "20%",
};
export default Row;
