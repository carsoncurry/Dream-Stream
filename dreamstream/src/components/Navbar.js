import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    const { isAuthenticated } = this.props.auth;

    return (
        <nav className="nav-wrapper black lighten-3">
            <div className="container">
                <a href="/" className="brand-logo"><img src="../images/dreamstream2color27.png" alt="dslogo" /></a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/mydreamstream">My DreamStream</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {
                        !isAuthenticated() && (
                            <button
                                id="qsLoginBtn"
                                bsStyle="primary"
                                className="btn-primary"
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </button>
                        )
                    }
                    {
                        isAuthenticated() && (
                            <button
                                id="qsLogoutBtn"
                                bsStyle="primary"
                                className="btn-primary"
                                onClick={this.logout.bind(this)}
                            >
                                Log Out
                            </button>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
