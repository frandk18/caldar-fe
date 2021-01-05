import React from "react";

const TextArea = ({ input, meta, label, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <textarea {...input} rows="4" cols="50" placeholder={placeholder}>
        {meta.error && meta.touched && <div>{meta.error}</div>}
      </textarea>
    </>
  );
};

export default TextArea;
