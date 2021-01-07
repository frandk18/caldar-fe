import React from "react";

const SimpleSelect = ({ input, label, options, field, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <select {...input} onChange={onChange}>
        <option />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option[field]}
          </option>
        ))}
      </select>
    </>
  );
};

export default SimpleSelect;
