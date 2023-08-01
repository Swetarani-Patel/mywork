import React from "react";

const StepThree = ({ setSteps, handleUserData4 }) => {
  return (
    <div className="step-three-container">
      <input
        type="text"
        data-cy="firstName"
        name="firstName"
        placeholder="First Name"
        onChange={handleUserData4}
        className="step-three-input"
      />
      <input
        type="text"
        data-cy="lastName"
        name="lastName"
        placeholder="Last Name"
        onChange={handleUserData4}
        className="step-three-input"
      />
      <input
        type="tel"
        data-cy="phone"
        name="phNumber"
        placeholder="Phone Number"
        onChange={handleUserData4}
        className="step-three-input"
      />
      <div className="step-three-button-container">
        <button
          type="button"
          data-cy="previous"
          onClick={() => setSteps(2)}
          className="step-three-button"
        >
          Previous
        </button>
        <button
          type="button"
          data-cy="next"
          onClick={(event) => {
            event.preventDefault();
            setSteps(4);
          }}
          className="step-three-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepThree;
