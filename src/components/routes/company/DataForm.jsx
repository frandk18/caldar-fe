import React, { useState } from "react";
import Form from "./Form.jsx";

function DataForm(props) {
  const [empty] = useState({
    _id: {
      $oid: null,
    },
    CIN: null,
    name: null,
    email: null,
    phone: null,
    addres: null,
    zipcode: null
  });
  if (props.id !== null) {
    return props.companies.map((company) => {
      if (company._id.$oid === props.id) {
        return (
          <Form
            company={company}
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
        company={empty}
        addEdit={props.addEdit}
        toggleForm={props.toggleForm}
      />
    );
  }
}
export default DataForm;
