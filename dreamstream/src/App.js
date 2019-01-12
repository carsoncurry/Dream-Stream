import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import MyDreamStream from './components/MyDreamStream';
import Contact from './components/Contact';

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
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/search" component={ Search } />
            <Route path="/mydreamstream" component={ MyDreamStream } />
            <Route path="/contact" component={ Contact } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
