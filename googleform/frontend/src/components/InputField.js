import React from "react";

const inputWidthMap = {
  small: "8em",
  medium: "50%",
  large: "100%",
};

export default function InputField({
  label,
  description,
  value,
  onChange,
  type,
  name,
  placeholder = "Your answer",
  errors = {},
  required,
  size = "small",
  ...rest
}) {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };

  const handleChangeRadio = (e) => {
    onChange(e.target.value === "true", name);
  };

  const errorMessage = errors[name];

  const renderRadioInput = () => {
    return (
      <div>
        <label className="input-label" aria-required={required}>
          {label}
          {required && <span>*</span>}
        </label>
        <>{description}</>
        <br />
        <input
          className="radio-input"
          checked={value === true}
          value={true}
          type={type}
          onChange={handleChangeRadio}
          {...rest}
        />
        <label>Yes</label>
        <br />
        <input
          className="radio-input"
          checked={value === false}
          value={false}
          type={type}
          onChange={handleChangeRadio}
          {...rest}
        />
        <label>No</label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  };

  const renderInput = () => {
    return (
      <div className="input-field">
        <label className="input-label" aria-required={required}>
          {label} {required && <span>*</span>}
        </label>
        <>{description}</>
        <input
          style={{ width: inputWidthMap[size] }}
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          {...rest}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  };

  return type === "radio" ? renderRadioInput() : renderInput();
}
