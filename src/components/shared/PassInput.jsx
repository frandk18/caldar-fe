import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TextInput = ({ input, meta, label, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input {...input} type="password" placeholder={placeholder} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default TextInput;
