import React from "react";

const FixSelect = ({ input, label, options, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <select {...input} onChange={onChange}>
        <option />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default FixSelect;
