import React from "react";
import { IoMdLogIn } from "react-icons/io";
import "./style.css";
const Login = () => {
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <h3>
            
             <IoMdLogIn />
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
