import React from "react";

import DatePicker from "react-datepicker";

import "./gv-datepicker.css";

const GVDatePicker = ({
  field,
  label,
  onChange,
  form: { touched, errors, setFieldValue },
  ...other
}) => {
  const handleChange = value => {
    setFieldValue(field.name, value);
  };

  const showError = () =>
    touched[field.name] &&
    errors[field.name] && (
      <div className="gv-datepicker__invalid">{errors[field.name]}</div>
    );

  return (
    <div className="gv-datepicker">
      <div>{label}</div>
      <DatePicker
        id={field.name}
        name={field.name}
        onChange={handleChange}
        {...other}
      />
      {showError()}
    </div>
  );
};

export default GVDatePicker;
