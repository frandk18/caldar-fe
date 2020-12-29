import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TableUI from "../../shared/TableUI.jsx";
import FormUI from "./FormUI.jsx";
import DATA from "./DATA.jsx";
import { connect } from "react-redux";
import { deleteTechnician as deleteTechnicianAction } from "../../../redux/actions/techniciansActions";

const Technician = ({ data, deleteTechnician }) => {
  //const [technicians, setTechnicians] = useState(Technicians);
  //const [showForm, setShowForm] = useState(false);
  //const [editing, setEditing] = useState(false);
  //const [id, setId] = useState(null);
  const technicians = data;
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

  const fieldObj = [
    "fullname",
    "knowledge",
    "email",
    "phone",
    "address",
    "dateOfBirth",
  ];
  const name = "Technicians";
  /*
  const toggleForm = () => {
    setShowForm(!showForm);
    if (editing) {
      setEditing(false);
    }
  };*/
  /*
  const addEdit = (newOne) => {
    let updateTechnicians = null;
    if (newOne._id.$oid === null) {
      newOne._id.$oid = uuidv4();
      updateTechnicians = [...technicians, newOne];
      setTechnicians(updateTechnicians);
      toggleForm();
    } else {
      updateTechnicians = [
        ...technicians.map((technician) => {
          if (technician._id.$oid === newOne._id.$oid) {
            technician = newOne;
          }
          return technician;
        }),
      ];
      setTechnicians(updateTechnicians);
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
      setTechnicians([
        ...technicians.filter((technician) => technician._id.$oid !== id),
      ]);
    }
  };*/

  const captureId = (id) => {
    console.log("capture", id);
  };

  const toggleForm = () => {
    console.log("toggle");
  };

  return (
    /*
    <React.Fragment>
      {showForm && (
        <FormUI
          technicians={technicians}
          id={id}
          editing={editing}
          addEdit={addEdit}
          showForm={showForm}
          toggleForm={toggleForm}
        />
      )}*/
    <TableUI
      headCells={headCells}
      data={technicians}
      fieldObj={fieldObj}
      name={name}
      toDelete={deleteTechnician}
      toEdit={captureId}
      toggleForm={toggleForm}
    />
    //</React.Fragment>

    //<DATA name={name}/>
  );
};
const mapStateToProps = (state) => ({
  data: state.technicians.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTechnician: (id) => dispatch(deleteTechnicianAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Technician);
