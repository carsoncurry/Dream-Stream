import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './Profile.css';

class NoProfile extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container col l12">
                <Row>
                    <h4 className="light-blue-text">Why DreamStream?</h4>
                </Row>
                <Row className="white-text">
                    Looking to keep track of the number of streaming services to which you're subscribed on a monthly basis?
                    Creating a DreamStream account is completely free and allows you to keep up-to-date records on your monthly budget. 
                    More and more people are switching from cable to streaming. See how much you can save by cutting the cord!
                </Row>
                <Row className="center">
                    {
                        !isAuthenticated() && (
                            <button className="waves-effect waves-light center btn btn-large light-blue white-text loggedin-btn" onClick={this.login.bind(this)}>
                                Log In or Create Your DreamStream Profile
                            </button>
                        )
                    }
                </Row>
            </div>
        )
    }
}

export default NoProfile;