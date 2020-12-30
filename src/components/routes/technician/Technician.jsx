import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import { connect } from "react-redux";
import {
  deleteTechnician as deleteTechnicianAction /*
  addTechnician as addTechnicianAction,
  editTechnician as editTechnicianAction,*/,
  getTechnicians as getTechniciansAction,
} from "../../../redux/actions/techniciansActions";
import { bindActionCreators } from "redux";

const Technician = ({
  data,
  isLoading,
  error,
  deleteTechnician,
  //addTechnician,
  //editTechnician,
  getTechnicians,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);
  const [headCells] = useState([
    {
      id: "fullname",
      align: "center",
      disablePadding: false,
      label: "Full name",
    },
    {
      id: "knowledge",
      align: "center",
      disablePadding: false,
      label: "Knowledge",
    },
    { id: "email", align: "center", disablePadding: false, label: "E-mail" },
    { id: "phone", align: "center", disablePadding: false, label: "Phone" },
    { id: "address", align: "center", disablePadding: false, label: "Address" },
    {
      id: "dateOfBirth",
      align: "center",
      disablePadding: false,
      label: "Birthdate",
    },
  ]);

  useEffect(() => {
    getTechnicians();
  }, [getTechnicians]);

  if (isLoading) {
    return <div>... LOADING</div>;
  }
  console.log(data);
  if (error) {
    return <div>ERROR!!!</div>;
  }

  const fieldObj = [
    "fullname",
    "knowledge",
    "email",
    "phone",
    "address",
    "dateOfBirth",
  ];
  const name = "Technicians";

  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };

  const addEdit = (newOne) => {
    if (newOne._id === null) {
      newOne._id = uuidv4();
      //addTechnician(newOne);
      toggleForm();
    } else {
      //editTechnician(newOne);
      toggleForm();
    }
  };

  const toDelete = (id) => {
    deleteTechnician(id);
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
          technicians={data}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}
      <TableUI
        headCells={headCells}
        data={data}
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
  data: state.technicians.data,
  isLoading: state.technicians.isLoading,
  error: state.technicians.error,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTechnicians: getTechniciansAction,
      deleteTechnician: deleteTechnicianAction,
    },
    dispatch
  );
};
/*
    deleteTechnician: (id) => dispatch(deleteTechnicianAction(id)),
    addTechnician: (newOne) => dispatch(addTechnicianAction(newOne)),
    editTechnician: (newOne) => dispatch(editTechnicianAction(newOne)),
  },dispatch);
};*/

export default connect(mapStateToProps, mapDispatchToProps)(Technician);
