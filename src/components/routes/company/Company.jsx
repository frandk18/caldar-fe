import React, { useState } from "react";
import Companies from "../../../mocks/companies.json";
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
      label: "name",
    },
    { id: "email", align: "center", disablePadding: false, label: "E-mail" },
    { id: "phone", align: "center", disablePadding: false, label: "Phone" },
    { id: "address", align: "center", disablePadding: false, label: "Address" },
    {
      id: "zipcode",
      align: "center",
      disablePadding: false,
      label: "zipcode",
    },
  ]);

  const fieldObj = [
    "CIN",
    "name",
    "email",
    "phone",
    "address",
    "zipcode",
  ];
  const name = "Company";
  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

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

  const toDelete = (id) => {
    if (id !== null) {
      setCompanies([
        ...companies.filter((company) => company._id.$oid !== id),
      ]);
    }
  };

  const toEdit = (id) => {
    console.log(id);
    toggleForm();
  };

  const toAdd = () => {};

  return (
    <React.Fragment>
      {/*{newItem && (
        <DataForm
          companies={companies}
          id={id}
          addEdit={addEdit}
          toggleForm={toggleForm}
        />
      )}*/}
      {showForm && (
        <FormUI
          toggleForm={toggleForm}
          showForm={showForm}
          companies={companies}
          id={id}
          editing={editing}
          addEdit={addEdit}
        />
      )}
      {/*
      <Table
        companies={companies}
        toggleForm={toggleForm}
        newItem={newItem}
        captureId={captureId}
        delItem={delItem}
      />*/}
      <TableUI
        headCells={headCells}
        data={companies}
        fieldObj={fieldObj}
        name={name}
        toDelete={toDelete}
        toEdit={captureId}
        toAdd={toAdd}
        toggleForm={toggleForm}
      />
    </React.Fragment>
  );
}
export default Company;
