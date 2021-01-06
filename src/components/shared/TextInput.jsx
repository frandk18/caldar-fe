import React from "react";

const TextInput = ({ input, meta, label, placeholder }) => {
  console.log(input, meta, label, placeholder);
  return (
    <>
      <label>{label}</label>
      <input {...input} type="text" placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};
export default TextInput;