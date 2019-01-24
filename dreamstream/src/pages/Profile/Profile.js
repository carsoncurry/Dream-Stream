import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income: [],
            expense: []
        };

        this.addValue = this.addValue.bind(this);
    }
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
        const sum = (a, b) => a + b;
        const income = this.state.income;
        const expense = this.state.expense;
        const total = income.reduce(sum, 0) - expense.reduce(sum, 0);
        const { profile } = this.state;
        return (
            <div>
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

                </div>

                <div className="container budget">
                    <div className="input-field col-12 addValue">
                        <select className="browser-default" ref="valueType">
                            <option value="" disabled selected>Add or Remove a Streaming Service</option>
                            <option value="income">Add</option>
                            <option value="expense">Remove</option>
                        </select>
                        <input type="number" min="0" ref="value" />
                    </div>
                    <button type="button" onClick={ this.addValue }>Calculate</button>
                    
                    <div> Income </div>
                    <Values values={this.state.income} />
                
                    <div> Expense </div>
                    <Values values={this.state.expense} />

                    <div> Monthly Total: { total } </div>

                </div>
            </div>
        );
    }
    addValue() {
        const valueType = this.refs.valueType.value;

        // Validate the value here
        const value = parseInt(this.refs.value.value, 10);

        this.setState({
            [valueType]: this.state[valueType].concat(value)
        });
    }
}

const Values = ({
    values
}) => {
    return (
        <ul>
            { values.map((value, i) =>
                <li key={`value-${i}`}>
                    { value } 
                </li>
            )}
        </ul>
    );
}

export default Profile;
