import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
            <div className="brand-logo"><NavLink to="/home"><img src="../images/dreamstream2color27.png" alt="dslogo" /></NavLink></div>
            <ul className="right">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
              <li><NavLink to="/mydreamstream">My DreamStream</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              {
                !isAuthenticated() && (
                  <li
                    id="qsLoginBtn"
                    className="waves-effect waves-light btn light-blue white-text"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li
                    id="qsLogoutBtn"
                    className="waves-effect waves-light btn light-blue white-text"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
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

export default App;

// import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home';
// import Search from './components/Search/Search';
// import MyDreamStream from './components/MyDreamStream/MyDreamStream';
// import Contact from './components/Contact/Contact';
// import Auth from './components/Auth/Auth';

// const auth = new Auth();
// auth.login();

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Navbar />
//           <Switch>
//             <Route exact path="/" component={ Home } />
//             <Route path="/search" component={ Search } />
//             <Route path="/mydreamstream" component={ MyDreamStream } />
//             <Route path="/contact" component={ Contact } />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
