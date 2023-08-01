import React, { useState } from "react";

const StepTwo = ({ setSteps, handleUserData4 }) => {
  return (
    <div className="step-two-container">
      <select
        name="education"
        onChange={handleUserData4}
        className="step-two-input"
      >
        <option value="" data-cy="education">
          Choose Education
        </option>
        <option>B.Tech</option>
        <option>Bsc</option>
        <option>B.A</option>
        <option>BCA</option>
      </select>
      <input
        type="month"
        name="month"
        data-cy="passing year"
        onChange={handleUserData4}
        className="step-two-input"
      />
      <input
        type="date"
        name="birthdate"
        data-cy="birthDate"
        onChange={handleUserData4}
        className="step-two-input"
      />
      <div className="step-two-button-container">
        <button
          type="button"
          data-cy="previous"
          onClick={() => setSteps(1)}
          className="step-two-button"
        >
          Previous
        </button>
        <button
          type="button"
          data-cy="next"
          onClick={(event) => {
            event.preventDefault();
            setSteps(3);
          }}
          className="step-two-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
