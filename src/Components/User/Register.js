import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate,useParams} from 'react-router-dom'
// import e from "cors";
import { GiArchiveRegister } from "react-icons/gi";

import "./style.css";

const Register = () => {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  

  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const navigate = useNavigate();

  const getAllusers = async () => {
    const user = await axios.get("http://localhost:5500/users");
    setUsers(user.data);
  };


  const postuser =()=>{
   
    let x=0;
    // eslint-disable-next-line
    users.map(item=>{
      // eslint-disable-next-line
      if(item.username==username)
      {
        x=1;
        
    // eslint-disable-next-line
      }else if(item.email==email){
        x=1;
      }
    })
    // eslint-disable-next-line
    if(x==1)
    {
      let myWindow = window.open("", "", "width=200,height=100");
        myWindow.document.write("<p> username/email existing</p>");
        myWindow.focus();
      
    }
    else if(x===0)
    
    {
      axios.post("http://localhost:5500/users", {username:username,email:email,passward:passward})
      navigate(`/login`);
      
    }
    
      }

      useEffect(() => {
        getAllusers();
      }, []);
     

  return (
    <div className="all">
    <div className="base-containerr">
      <div className="header">Register</div>
      <div className="contentr">
        <div className="image">
          
            <GiArchiveRegister className="img"/>
          
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="button" className="btn" onClick={postuser}>
            register
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
