import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MyDreamStream from './pages/MyDreamStream';
import Contact from './pages/Contact';

class App extends Component {
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
