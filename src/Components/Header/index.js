import React from 'react';
import { AiFillHome, AiOutlineStar} from 'react-icons/ai';

import {MdManageAccounts} from 'react-icons/md'
import { useNavigate } from "react-router-dom";

import imgs from "./3231780d4a64155e14aa53b31963b115-removebg-preview.png"

// import Logo from '';
import './style.css';
const Header = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line

  
    const home=()=>{
        navigate(`/`);
    }
    const favorite=()=>{
        navigate(`/favorite`);
    }
    const account=()=>{
        navigate(`/account`);
    }
    


    return (
        <div className="header">
            <img src={imgs} className="imga" />
           <h1 onClick={home} className="icon" ><AiFillHome /></h1>
           <h1 onClick={favorite} className="icon"><AiOutlineStar/></h1>
           <h1 onClick={account} className="icon"><MdManageAccounts /></h1>


        </div>
    )
}

export default Header;
