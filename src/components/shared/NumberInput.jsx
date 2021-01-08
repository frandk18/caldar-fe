import React from "react";

const NumberInput = ({ input, meta, label, placeholder }) => {
  //console.log(meta.invalid,meta.error,meta.touched,meta.submitError);
  return (
    <>
      <label>{label}</label>
      <input {...input} type="number" placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default NumberInput;
