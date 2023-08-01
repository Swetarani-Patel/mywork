import React from "react";

const UserInfo = ({ ele }) => {
  return (
    <div className="user-info-container">
      <h2 className="user-info-heading">You are registered successfully!</h2>
      <p className="user-info-item">Email: {ele.email}</p>
      <p className="user-info-item">Password: {ele.password}</p>
      <p className="user-info-item">Confirm Password: {ele.confirmpassword}</p>
      <p className="user-info-item">Father Name: {ele.fName}</p>
      <p className="user-info-item">Mother Name: {ele.mName}</p>
      <p className="user-info-item">Address: {ele.address}</p>
      <p className="user-info-item">Education: {ele.education}</p>
      <p className="user-info-item">Month: {ele.month}</p>
      <p className="user-info-item">Birthdate: {ele.birthdate}</p>
      <p className="user-info-item">First Name: {ele.firstName}</p>
      <p className="user-info-item">Last Name: {ele.lastName}</p>
      <p className="user-info-item">Phone Number: {ele.phNumber}</p>
    </div>
  );
};

export default UserInfo;
