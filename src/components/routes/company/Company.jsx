import React, { useState, useEffect } from "react";
import TableUI from "../../shared/TableUI.jsx";
import { connect } from "react-redux";
import { getCompanies as getCompaniesAction } from "../../../redux/actions/companiesActions";
import { showModal as showModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../redux/types/modalTypes";
import { bindActionCreators } from "redux";

const Company = ({
  companies,
  isLoading,
  error,
  refresh,
  getCompanies,
  showModal,
}) => {
  const [headCells] = useState([
    { id: "CIN", align: "center", disablePadding: false, label: "CIN" },
    { id: "name", align: "center", disablePadding: false, label: "Name" },
    { id: "address", align: "center", disablePadding: false, label: "Address" },
    {
      id: "zipcode",
      align: "center",
      disablePadding: false,
      label: "Zip Code",
    },
    { id: "contact", align: "center", disablePadding: false, label: "Contact" },
    { id: "phone", align: "center", disablePadding: false, label: "Phone" },
    { id: "email", align: "center", disablePadding: false, label: "Email" },
  ]);

  const fieldObj = [
    "CIN",
    "name",
    "address",
    "zipcode",
    "contact",
    "phone",
    "email",
  ];

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

  const showAddEditModal = (id) => {
    if (id === null) {
      showModal(modalTypes.ADD_EDIT_COMPANY, {
        editing: false,
      });
    } else {
      showModal(modalTypes.ADD_EDIT_COMPANY, {
        id: id,
        editing: true,
      });
    }
  };

  const showDeleteModal = (id) => {
    showModal(modalTypes.DELETE_COMPANY, {
      id: id,
    });
  };

  return (
    <React.Fragment>
      <TableUI
        headCells={headCells}
        data={companies}
        fieldObj={fieldObj}
        name={name}
        toDelete={showDeleteModal}
        toAddEdit={showAddEditModal}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  companies: state.companies.data,
  isLoading: state.companies.isLoading,
  error: state.companies.error,
  refresh: state.companies.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCompanies: getCompaniesAction,
      showModal: showModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
