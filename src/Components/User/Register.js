import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
// import e from "cors";
import { GiArchiveRegister } from "react-icons/gi";

import "./style.css";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllusers();
  }, []);

  const getAllusers = async () => {
    const user = await axios.get("http://localhost:5500/users");
    setUsers(user.data);
  };

  const postuser =()=>{
    axios.post("http://localhost:5500/users", {newUser})
      }
  

  const handelname = (e) => {
    const { value } = e.target;

    setName(value);
  };
  const handelemail = (e) => {
    const { value } = e.target;

    setEmail(value);
  };
  const handelpassward = (e) => {
    const { value } = e.target;

    setPassward(value);
  };

  const handelSubmit = (e) => {
    setNewUser({ username: name, email: email, passward: passward  });
    
    // e.preventDefault();
    console.log(newUser);

    // postuser();
    // navigate(`/login`);
  };

  

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
              onChange={(e) => handelname(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => handelemail(e)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passward">Passward</label>
            <input
              type="passward"
              name="passward"
              placeholder="passward"
              onChange={(e) => handelpassward(e)}
              required
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={(e) => handelSubmit(e)}>
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
