import React from "react";

const DateInput = ({ input, meta, label, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input {...input} type="date" placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default DateInput;
