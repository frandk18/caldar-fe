import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteCompany as deleteCompanyAction,
  addCompany as addCompanyAction,
  editCompany as editCompanyAction,
} from "../../../redux/actions/companyActions";

const Company = ({ data, deleteCompany, addCompany, editCompany }) => {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
  const companies = data;
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
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      addCompany(newOne);
      toggleForm();
    } else {
      editCompany(newOne);
      toggleForm();
    }
  };

  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
  };

  const toDelete = (id) => {
    deleteCompany(id);
  };

  return (
    <React.Fragment>
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
};

const mapStateToProps = (state) => ({
  data: state.company.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCompany: (id) => dispatch(deleteCompanyAction(id)),
    addCompany: (newOne) => dispatch(addCompanyAction(newOne)),
    editCompany: (newOne) => dispatch(editCompanyAction(newOne)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
