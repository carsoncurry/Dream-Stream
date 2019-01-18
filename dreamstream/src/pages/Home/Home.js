import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container home">
                <div className="row">
                    <h4 className="center light-blue-text">Welcome to DreamStream</h4>
                </div>

                <div className="row center">
                    {
                        isAuthenticated() && (
                            <button className="waves-effect waves-light center btn btn-large light-blue white-text loggedin-btn">
                                <NavLink to="/profile" className="white-text">
                                    Welcome Back! Go to My DreamStream
                                </NavLink>
                            </button>
                        )
                    }
                    {
                        !isAuthenticated() && (
                            <button className="waves-effect waves-light center btn btn-large light-blue white-text loggedout-btn" onClick={this.login.bind(this)}>
                                Log In or Create Your DreamStream Profile
                            </button>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Home;
