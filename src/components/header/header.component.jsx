import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import Logo from '../../images/ComputerScience-no-background (1).png'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <h1  className = "h1">Data Visualization</h1>
        </Link>
    </div>
);
export default Header;
