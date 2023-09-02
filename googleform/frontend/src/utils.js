import { useState } from "react";

export const SchemaTypes = {
  string: (required = false, message = "This is a required question") => ({
    type: "string",
    required,
    message,
  }),
  number: (required = false, message = "This is a required question") => ({
    type: "number",
    required,
    message,
  }),
  boolean: (required = false, message = "This is a required question") => ({
    type: "boolean",
    required,
    message,
  }),
};

const formatValue = (value, type) => {
  try {
    if (type !== "string") {
      value = JSON.parse(value);
    }
  } catch (error) {
    value = value;
  }
  return value;
};

const formatData = (schema, data) => {
  const formatted = {};
  Object.keys(data).forEach((key) => {
    const schemaTypes = schema[key];
    const value = formatValue(data[key], schemaTypes.type);
    formatted[key] = value;
  });
  return formatted;
};

const validateData = (schema, data) => {
  const errors = {};
  Object.keys(data).forEach((key) => {
    const schemaTypes = schema[key];
    const value = formatValue(data[key], schemaTypes.type);
    switch (true) {
      case typeof value !== schemaTypes.type:
        errors[key] = `⚠ ${
          schemaTypes.message ||
          `Expected ${
            schemaTypes.type
          } for ${key} but received type ${typeof value}`
        }`;
        break;
      case schemaTypes.required &&
        (value === null || value === undefined || value === ""):
        errors[key] = `⚠ ${schemaTypes.message || `${key} is Required!`}`;
        break;
      default:
        break;
    }
  });
  return errors;
};

export const useForm = (schema, data) => {
  const [form, setForm] = useState({});
  const combinedForm = { ...data, ...form };

  const register = (name) => {
    const value = combinedForm[name];
    const required = schema[name]?.required;

    const onBlur = () => {
      setForm((prevState) => ({ [name]: data[name], ...prevState }));
    };

    const onChange = (value) => {
      setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    return {
      name,
      onChange,
      onBlur,
      value,
      required,
      errors: validateData(schema, form),
    };
  };

  const format = () => formatData(schema, form);

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const errorsMap = validateData(schema, combinedForm);
    const errorsList = Object.keys(errorsMap).length;

    if (errorsList) {
      setForm(combinedForm);
    } else {
      onSubmit(format());
    }
  };

  const resetForm = () => {
    setForm({});
  };

  return {
    register,
    handleSubmit,
    resetForm,
  };
};
