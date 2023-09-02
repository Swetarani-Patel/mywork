import React from "react";

export default function SelectField({
  label,
  value,
  options,
  onChange,
  type,
  name,
  errors = {},
}) {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };

  const errorMessage = errors[name];

  return (
    <div>
      <label>
        {label} <span>*</span>
      </label>
      <br />
      <select type={type} value={value} onChange={handleChange}>
        <option disabled value="">
          Choose
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
