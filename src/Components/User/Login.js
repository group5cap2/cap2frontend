import React,{useState,useEffect} from "react";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import "./style.css";
const Login = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers= async () => {
        const user = await axios.get("localhost:5500/users")
        setUsers(user.data);
    }

  const handleChange=(e)=>{
      const{name ,value}=e;



  }

  const handleSubmit=(e)=>{

  }


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
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passward">Passward</label>
            <input
              type="passward"
              name="passward"
              placeholder="passward"
              onChange={(e) => handleChange(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onSubmit={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
