import React from "react";

const NumberInput = ({ input, meta, label, placeholder }) => {
  console.log(input, meta, label, placeholder);
  return (
    <>
      <label>{label}</label>
      <input {...input} type="number" placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};
export default NumberInput;