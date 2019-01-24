import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <nav className="nav-wrapper black lighten-3">
          <div className="container">
            <div className="brand-logo"><NavLink to="/"><img src="../images/dreamstream2color27.png" alt="dslogo" /></NavLink></div>
            <ul className="right">
              <li><NavLink to="/" className="waves-effect waves-light">Home</NavLink></li>
              <li><NavLink to="/search" className="waves-effect waves-light">Search</NavLink></li>
              {
                isAuthenticated() && (
                  <li><NavLink to="/profile" className="waves-effect waves-light">Profile</NavLink></li>
                )
              }
              {
                !isAuthenticated() && (
                  <li className="login">
                    <button 
                      id="qsLoginBtn"
                      className="waves-effect waves-light btn light-blue white-text"
                      onClick={this.login.bind(this)}
                    >
                      Log In / Sign Up
                    </button>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li className="logout">
                    <button
                      id="qsLogoutBtn"
                      className="waves-effect waves-light btn light-blue white-text"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </button>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </div>

    )
  }
}

export default withRouter(App);
