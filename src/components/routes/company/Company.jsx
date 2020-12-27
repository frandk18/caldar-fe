import React, { useState } from "react";
import Companies from "../../../mocks/company.json";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";

function Company() {
  const [companies, setCompanies] = useState(Companies);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  const [headCells] = useState([
    {
      id: "CIN",
      align: "center",
      disablePadding: false,
      label: "CIN",
    },
    {
      id: "name",
      align: "center",
      disablePadding: false,
      label: "Name",
    },
    { id: "email", align: "center", disablePadding: false, label: "E-mail" },
    { id: "phone", align: "center", disablePadding: false, label: "Phone" },
    { id: "address", align: "center", disablePadding: false, label: "Address" },
    {
      id: "zipcode",
      align: "center",
      disablePadding: false,
      label: "Zip Code",
    },
  ]);

  const fieldObj = ["CIN", "name", "email", "phone", "address", "zipcode"];

  const name = "Companies";

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne) => {
    let updateCompanies = null;
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      updateCompanies = [...companies, newOne];
      setCompanies(updateCompanies);
      toggleForm();
    } else {
      updateCompanies = [
        ...companies.map((company) => {
          if (company._id.$oid === newOne._id.$oid) {
            company = newOne;
          }
          return company;
        }),
      ];
      setCompanies(updateCompanies);
      setEditing(false);
    }
    toggleForm();
  };

  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

  const toDelete = (id) => {
    if (id !== null) {
      setCompanies([...companies.filter((company) => company._id.$oid !== id)]);
    }
  };

  return (
    <React.Fragment>
      {}
      {showForm && (
        <FormUI
          companies={companies}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      {}
      <TableUI
        headCells={headCells}
        data={companies}
        fieldObj={fieldObj}
        name={name}
        toDelete={toDelete}
        toEdit={captureId}
        toggleForm={toggleForm}
      />
    </React.Fragment>
  );
}
export default Company;
