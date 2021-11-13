import React from 'react';
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import {MdManageAccounts} from 'react-icons/md'

import { Link } from 'react-router-dom';

// import Logo from '';
import './style.css';
const Header = () => {
    return (
        <div>
           <Link to="/" ><AiFillHome /></Link>
           <Link to="/favorite" ><GrFavorite /></Link>
           <Link to="/account" ><MdManageAccounts /></Link>

        </div>
    )
}

export default Header;
