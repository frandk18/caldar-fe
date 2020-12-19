import React, { useState } from "react";
import Form from "./Form.jsx";

function DataForm(props) {
  const [empty] = useState({
    _id: {
      $oid: null,
    },
    services: [
      {
        $oid: null,
      },
    ],
    fullname: null,
    email: null,
    phone: null,
    addres: null,
    dateOfBirth: null,
    knowledge: null,
    obs: null,
  });
  if (props.id !== null) {
    return props.technicians.map((technician) => {
      if (technician._id.$oid === props.id) {
        return (
          <Form
            technician={technician}
            key={technician._id.$oid}
            addEdit={props.addEdit}
            toggleForm={props.toggleForm}
          />
        );
      } else {
        return false;
      }
    });
  } else {
    return (
      <Form
        technician={empty}
        addEdit={props.addEdit}
        toggleForm={props.toggleForm}
      />
    );
  }
}
export default DataForm;
