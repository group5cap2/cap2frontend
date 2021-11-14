import React from 'react';
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import {MdManageAccounts} from 'react-icons/md'
import { useNavigate } from "react-router-dom";


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
            
           <h1 onClick={home} className="icon" ><AiFillHome /></h1>
           <h1 onClick={favorite} className="icon"><GrFavorite /></h1>
           <h1 onClick={account} className="icon"><MdManageAccounts /></h1>

        </div>
    )
}

export default Header;
