import React, { useState } from "react";

const StepOne = ({ setSteps, handleUserData4 }) => {
  return (
    <div className="step-one-container">
      <input
        type="email"
        data-cy="email"
        placeholder="Email"
        name="email"
        onChange={handleUserData4}
        className="step-one-input"
      />
      <input
        type="password"
        data-cy="password"
        placeholder="Password"
        name="password"
        onChange={handleUserData4}
        className="step-one-input"
      />
      <input
        type="password"
        data-cy="confirmedPassword"
        placeholder="Confirm Password"
        name="confirmpassword"
        onChange={handleUserData4}
        className="step-one-input"
      />
      <button
        type="button"
        data-cy="next"
        onClick={(event) => {
          event.preventDefault();
          setSteps(2);
        }}
        className="step-one-button"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
