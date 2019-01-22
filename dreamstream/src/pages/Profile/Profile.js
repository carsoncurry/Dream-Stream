import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './Profile.css';

class Profile extends Component {
    componentWillMount() {
        this.setState({ profile: {}});
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }

    render() {
        const { profile } = this.state;
        return (
            <div className="container col-12">
                <Row>
                    <h4 className="light-blue-text">{profile.nickname}'s DreamStream</h4>
                </Row>
                <Row>
                    <img id="profile-pic" src={profile.picture} alt="profile" />
                </Row>
                <Row className="white-text">
                    Hi, {profile.nickname}! Welcome to your personal DreamStream page. Here you can update your preferences,
                    add or remove streaming services to which you are currently subscribed
                    and search for new series or movies!
                </Row>
                <Row>
                    <h4 className="light-blue-text">My Streaming Services</h4>
                    <p className="white-text">This is where all of your currently subscribed-to streaming services can be found:</p>
                </Row>
            </div>
        )
    }
}

export default Profile;
