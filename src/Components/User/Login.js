import React, { useState, useEffect } from "react";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUserame] = useState("");
  const [passward, setPassward] = useState("");
  const [result, setResult] = useState(false);
  const navigate = useNavigate();


  const getAllusers = async () => {
    const user = await axios.get("http://localhost:5500/users");
    setUsers(user.data);
  };

  const loginuser = () => {
    users.map((user) => {
      if (user.username === username && user.passward === passward) {
        setResult(true);
      }
    });
    if (result) {
      navigate(`/`);
    } else if (!result) {
      let myWindow = window.open("", "", "width=200,height=100");
      myWindow.document.write("<p>wrong username/passward compination</p>");
      myWindow.focus();
    }
  };
  useEffect(() => {
    getAllusers();
  }, []);

  const loginuser = () => {
    users.map((user) => {
      if (user.username === username && user.passward === passward) {
        setResult(true);
      }
    });
    if (result) {
      navigate(`/`);
    } else if (!result) {
      let myWindow = window.open("", "", "width=200,height=100");
      myWindow.document.write("<p>wrong username/passward compination</p>");
      myWindow.focus();
    }
  };

  return (
    <div className="all">
      <div className="base-containerl">
        <div className="header">Login</div>
        <div className="contentl">
          <div className="image">
            <IoMdLogIn className="img" />

          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUserame(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passward">Passward</label>
              <input
                type="passward"
                name="passward"
                placeholder="passward"
                onChange={(e) => setPassward(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={loginuser}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
