import React from "react";

const Select = ({ input, meta, label, options, field }) => (
  <>
    <label>{label}</label>
    <select {...input}>
      <option />
      {options.map((option) => (
        <option key={option._id} value={option[field]}>
          {option[field]}
        </option>
      ))}
    </select>
  </>
);

export default Select;
