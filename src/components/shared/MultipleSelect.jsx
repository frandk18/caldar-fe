import React from "react";

const MultipleSelect = ({ input, label, options, field }) => {
  /*const initialValue = input.value
  const available = options.filter((option) => option.building === undefined);
  let own = [];
  initialValue.forEach((value) => {
    own = options.filter((option) => option._id === value);
  });*/

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
      {/*<select {...input} multiple size={((available.length+own.lenght)<1) ? '1' : '2'}>
        <option disabled={false}>{((available.length+own.lenght)<1) ? 'No boilers available' : ''}</option>
        {own.map((option) => (
          <option key={option._id} value={option._id}>
            {option[field]}
          </option>
        ))}}
        {available.map((option) => (
          <option key={option._id} value={option._id}>
            {option[field]}
          </option>
        ))}
        </select>*/}
    </>
  );
};

export default MultipleSelect;
