import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper black lighten-3">
            <div className="container">
                <a href="/" className="brand-logo light-blue-text">DreamStream</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/mydreamstream">My DreamStream</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li>Login / Signup</li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
