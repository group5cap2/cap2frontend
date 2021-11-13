import React from 'react';
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import {MdManageAccounts} from 'react-icons/md'

import { Link } from 'react-router-dom';

// import Logo from '';
import './style.css';
const Header = () => {
    return (
        <div className="header">
            
           <Link to="/" className="icon"><AiFillHome /></Link>
           <Link to="/favorite" className="icon"><GrFavorite /></Link>
           <Link to="/account" className="icon"><MdManageAccounts /></Link>

        </div>
    )
}

export default Header;
