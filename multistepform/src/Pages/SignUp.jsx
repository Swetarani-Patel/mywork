import React, { useState } from "react";
import StepOne from "../Components/SignUp/StepOne";
import StepTwo from "../Components/SignUp/StepTwo";
import StepThree from "../Components/SignUp/StepThree";
import StepFour from "../Components/SignUp/StepFour";
import UserInfo from "../Components/SignUp/UserInfo";

const SignUp = () => {
  const [steps, setSteps] = useState(1);
  const [showUserData, setShowUserData] = useState(false);
  const [user4, setUser4] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    fName: "",
    mName: "",
    address: "",
    education: "",
    month: "",
    birthdate: "",
    firstName: "",
    lastName: "",
    phNumber: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const getuserDetails = (event) => {
    event.preventDefault();
    setShowUserData(true);
    setFormSubmitted(true);
  };

  const handleUserData4 = (event) => {
    setUser4({ ...user4, [event.target.name]: event.target.value });
  };

  return (
    <div>
      {formSubmitted ? (
        <UserInfo ele={user4} />
      ) : (
        <div>
          {/* create form and render component according to steps */}
          <h2 data-cy="current-step" className="steps">
            Step: {steps}
          </h2>
          <form onSubmit={getuserDetails}>
            {steps === 1 && (
              <StepOne setSteps={setSteps} handleUserData4={handleUserData4} />
            )}
            {steps === 2 && (
              <StepTwo setSteps={setSteps} handleUserData4={handleUserData4} />
            )}
            {steps === 3 && (
              <StepThree
                setSteps={setSteps}
                handleUserData4={handleUserData4}
              />
            )}
            {steps === 4 && (
              <StepFour setSteps={setSteps} handleUserData4={handleUserData4} />
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
