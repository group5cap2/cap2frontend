import React from "react";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import Login from "../User/Login";
import Register from "../User/Register";
import "./style.css";
const Account = () => {
  return (
    <div className="counter">
      <div className="btn">
        <div className="log">
          <h1>LogIn</h1>
        </div>
        <div className="reg">
          <h1>Register</h1>
        </div>
      </div>
      <div className="login">
          <Login />
      </div>
      <div className="register">
          <Register />
      </div>

    </div>
  );
};

export default Account;
