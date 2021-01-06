import React, { useState, useEffect } from "react";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteCompany as deleteCompanyAction,
  addCompany as addCompanyAction,
  editCompany as editCompanyAction,
  getCompanies as getCompaniesAction,
} from "../../../redux/actions/companiesActions";
import { bindActionCreators } from "redux";

const Company = ({
  companies,
  isLoading,
  error,
  refresh,
  deleteCompany,
  addCompany,
  editCompany,
  getCompanies,
}) => {
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

  useEffect(() => {
    if (refresh === true) {
      getCompanies();
    }
  }, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <div>... LOADING</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne, _id) => {
    if (_id === null) {
      addCompany(newOne);
      toggleForm();
    } else {
      editCompany(newOne, id);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteCompany(id);
  };

  const captureId = (id) => {
    setId(id);
    if (id !== null) {
      setEditing(true);
    }
    toggleForm();
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
  buildings: state.buildings.data,
  companies: state.companies.data,
  isLoading: state.companies.isLoading,
  error: state.companies.error,
  refresh: state.companies.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCompanies: getCompaniesAction,
      deleteCompany: deleteCompanyAction,
      addCompany: addCompanyAction,
      editCompany: editCompanyAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
