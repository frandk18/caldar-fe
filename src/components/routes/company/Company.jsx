import React from "react";
import Companies from "../../../mocks/companies.json"
import Table from "./Table.jsx";
import Form from "./Form.jsx";
import { v4 as uuidv4 } from "uuid";

function Company() {
  const [Companies, setCompanies] = useState(Companies);
  const [showform, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const delItem = (id) => {
    if (id !== null) {
      setCompanies([
        ...companies.filter((company) => company._id.$oid !== id),
      ]);
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
        ...companies.map((companies) => {
          if (company._id.$oid == newOne._id.$oid) {
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

  console.log(editing);

  return (
    <React.Fragment>
      <div style={containerStyle}>
        <div style={titleStyle}>Companies</div>
        {showForm && (
          <Form
            companies={companies}
            id={id}
            editing={editing}
            addEdit={addEdit}
            toggleForm={toggleForm}
          />
        )}
        <Table
          companies={companies}
          toggleForm={toggleForm}
          captureId={captureId}
          delItem={delItem}
        />
      </div>
    </React.Fragment>
  );
}

const containerStyle = {
  display: flex,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px #707070 solid",
  borderRadius: "25px",
  padding: "30px 50px 50px 50px",
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#094455",
  textDecoration: "underline",
  textAlign: "center",
  marginBottom: "20px",
};

export default Company;
