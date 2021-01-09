import { React, useState } from "react";
import ModalMaterial from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeModal as closeModalAction } from "../../redux/actions/modalActions";
import modalTypes from "../../redux/types/modalTypes";
import FormBuilding from "../routes/building/BuildingForm/BuildingForm";
import FormTechnician from "../routes/technician/TechnicianForm/TechnicianForm";
import FormBoiler from "../routes/boiler/BoilerForm/BoilerForm";
import RemoveBuildingMessage from "../routes/building/RemoveBuildingMessage/RemoveBuildingMessage";
import RemoveTechnicianMessage from "../routes/technician/RemoveTechnicianMessage/RemoveTechnicianMessage";
import RemoveBoilerMessage from "../routes/boiler/RemoveBoilerMessage/RemoveBoilerMessage";

const getModalStyle = () => {
  const top = 25;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `traslate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    outline: 0,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Modal = ({
  show,
  modalType,
  meta,
  closeModal,
  buildings,
  companies,
  boilers,
  technicians,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  let modalComponent;

  switch (modalType) {
    case modalTypes.ADD_EDIT_BUILDING:
      modalComponent = (
        <FormBuilding
          buildings={buildings}
          companies={companies}
          boilers={boilers}
          id={meta.id}
          editing={meta.editing}
        />
      );
      break;
    case modalTypes.ADD_EDIT_TECHNICIAN:
      modalComponent = (
        <FormTechnician
          technicians={technicians}
          id={meta.id}
          editing={meta.editing}
        />
      );
      break;
    case modalTypes.ADD_EDIT_BOILER:
      modalComponent = (
        <FormBoiler
          boilers={boilers}
          buildings={buildings}
          id={meta.id}
          editing={meta.editing}
        />
      );
      break;
    case modalTypes.DELETE_BUILDING:
      modalComponent = <RemoveBuildingMessage id={meta.id} />;
      break;
    case modalTypes.DELETE_TECHNICIAN:
      modalComponent = <RemoveTechnicianMessage id={meta.id} />;
      break;
    case modalTypes.DELETE_BOILER:
      modalComponent = <RemoveBoilerMessage id={meta.id} />;
      break;
    default:
      modalComponent = null;
      break;
  }

  return (
    <ModalMaterial
      open={show}
      onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div style={modalStyle} className={classes.paper}>
        {modalComponent}
      </div>
    </ModalMaterial>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta,
    buildings: state.buildings.data,
    companies: state.companies.data,
    boilers: state.boilers.data,
    technicians: state.technicians.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      closeModal: closeModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
