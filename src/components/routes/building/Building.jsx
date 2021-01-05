import React, { useState, useEffect } from "react";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteBuilding as deleteBuildingAction,
  addBuilding as addBuildingAction,
  editBuilding as editBuildingAction,
  getBuildings as getBuildingsAction,
} from "../../../redux/actions/buildingsActions";
import { bindActionCreators } from "redux";

const Building = ({
  buildings,
  companies,
  boilers,
  isLoading,
  error,
  refresh,
  deleteBuilding,
  addBuilding,
  editBuilding,
  getBuildings,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  const [headCells] = useState([
    { id: "company", align: "center", disablePadding: false, label: "Company" },
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
    "company",
    "name",
    "address",
    "zipcode",
    "contact",
    "phone",
    "email",
  ];

  const name = "Buildings";

  useEffect(() => {
    if (refresh === true) {
      getBuildings();
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
      addBuilding(newOne);
      toggleForm();
    } else {
      editBuilding(newOne, id);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteBuilding(id);
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
          buildings={buildings}
          companies={companies}
          boilers={boilers}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={buildings}
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
  boilers: state.boilers.data,
  isLoading: state.buildings.isLoading,
  error: state.buildings.error,
  refresh: state.buildings.refresh,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBuildings: getBuildingsAction,
      deleteBuilding: deleteBuildingAction,
      addBuilding: addBuildingAction,
      editBuilding: editBuildingAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Building);
