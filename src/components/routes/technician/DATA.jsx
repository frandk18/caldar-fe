import React from "react";
import { connect } from "react-redux";

function DATA(data, props) {
  console.log(data);
  return <h1>{props.name}</h1>;
}

const mapStateToProps = (state) => ({
  data: state.technicians.data,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DATA);
