import React from "react";
import { Link } from 'react-router-dom';
import { MdOutlineSupervisorAccount } from "react-icons/md";
import "./style.css";
const Account = () => {
  

 

  return (
    <div className="counter">
        <h1><MdOutlineSupervisorAccount /></h1>
      <div >
        <Link to="/login">Login</Link>
      </div>

      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Account;
