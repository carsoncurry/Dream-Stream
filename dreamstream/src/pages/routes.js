import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from '../App';
import Home from './Home/Home';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import NoProfile from './Profile/NoProfile';
import Callback from '../utils/Callback/Callback';
import Auth from '../utils/Auth/Auth';
import history from '../utils/history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <Router history={history}>
            <div>
                <Route path="/" render={(props) => <App auth={auth} {...props} />} />
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/search" render={(props) => <Search auth={auth} {...props} />} />
                <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
                <Route path="/noprofile" render={(props) => <NoProfile auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
        </Router>
    );
}
