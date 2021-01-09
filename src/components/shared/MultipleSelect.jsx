import React from "react";

const MultipleSelect = ({ input, label, options, field }) => {
    
  return (
    <>
      <label>{label}</label>
      <select {...input} multiple size="3">
        <option disabled />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option[field]}
          </option>
        ))}
      </select>
    </>
  );
};
export default MultipleSelect;