import React from "react";
import { GiArchiveRegister } from "react-icons/gi";

import "./style.css";
const Register = () => {
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <h3>
            <GiArchiveRegister />
          </h3>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="passward">Passward</label>
            <input
              type="passward"
              name="passward"
              placeholder="passward"
              required
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
