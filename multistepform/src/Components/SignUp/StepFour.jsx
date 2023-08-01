import React from "react";

const StepFour = ({ handleUserData4, setSteps }) => {
  return (
    <div className="step-four-container">
      <input
        type="text"
        data-cy="fatherName"
        name="fName"
        placeholder="Father Name"
        onChange={handleUserData4}
        className="step-four-input"
      />
      <input
        type="text"
        data-cy="motherName"
        name="mName"
        placeholder="Mother Name"
        onChange={handleUserData4}
        className="step-four-input"
      />
      <textarea
        data-cy="address"
        name="address"
        cols="30"
        rows="5"
        placeholder="Address"
        onChange={handleUserData4}
        className="step-four-textarea"
      ></textarea>
      <div className="step-four-button-container">
        <button
          type="button"
          data-cy="previous"
          onClick={() => setSteps(3)}
          className="step-four-button"
        >
          Previous
        </button>
        <input type="submit" value="Submit" className="step-four-button" />
      </div>
    </div>
  );
};

export default StepFour;
