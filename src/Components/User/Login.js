import React,{useState,useEffect} from "react";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import "./style.css";
const Login = () => {
    const [users, setUsers] = useState([]);
    const [loginuser, setLoginuser] = useState();
    const [name, setName] = useState("");
    const [passward, setPassward] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getAllusers();
      }, []);
    
      const getAllusers = async () => {
        const user = await axios.get("http://localhost:5500/users");
        setUsers(user.data);
      };

      const handelname = (e) => {
        const { value } = e.target;
  
        users.map(item=>{
            if(item.username===value)
            {
                setName(value);
            }else{
                e.target.value="";
            }
        })
        
      };

      const handelpassward = (e) => {
        const { value } = e.target;
  
        users.map(item=>{
            if(item.username===name&&item.passward===value)
            {
                setPassward(value);
            }else{
                e.target.value="";
            }
        })
      };


      const handelSubmit = (e) => {
          
        
        e.preventDefault();
        navigate(`/`);
      
       
      };
    

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
              onChange={(e) => handelname(e)}
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
