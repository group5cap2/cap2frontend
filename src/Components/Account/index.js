import React from "react";
import { MdOutlineSupervisorAccount } from "react-icons/md";

import {useNavigate} from 'react-router-dom'
import Login from "../User/Login";
import Register from "../User/Register";
import "./style.css";
const Account = () => {
    const navigate = useNavigate();

    const changeRoutedis=(x)=>{
        if(x==="log"){
            navigate(`/login`);
        }
        else{
            navigate(`/register`);
        }
        
    }
  return (
    <div className="count">
      <div className="main">
        <MdOutlineSupervisorAccount className="logo"/>
        <div className="reg" onClick={() => changeRoutedis("log")}>
          <h1>LogIn</h1>
        </div>
        <div className="reg" onClick={() => changeRoutedis("reg")}>
          <h1>Register</h1>
        </div>
      </div>
     


    
    </div>
  );
};

export default Account;
