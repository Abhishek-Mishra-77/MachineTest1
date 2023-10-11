import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand logo">APP LOGO</Link>
                <div className="d-flex" role="search">
                    <Link to={'/'} className="navbar-brand page" >DASHBOARD</Link>
                    <Link to={'/ads'} className="navbar-brand page">CREATE ADS</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar