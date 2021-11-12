import React from 'react';
import { AiFillHome} from 'react-icons/ai';
import { Link } from 'react-router-dom';

// import Logo from '';
import './style.css';
const Header = () => {
    return (
        <div>
           <Link to="/home" ><AiFillHome /></Link>
           <Link to="/favorite" ><AiFillHome /></Link>
           <Link to="/account" ><AiFillHome /></Link>
            
        </div>
    )
}

export default Header;
