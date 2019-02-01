import React, { Component } from 'react';
import { Row, Modal, Button, Autocomplete, Col, Card } from 'react-materialize';
import SavedBox from "../../components/SavedBox";
import './Profile.css';
import API from "../../utils/API"

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            income: [],
            expense: [],
            searches: []
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

    getSavedSearches = () => {
        API.getSavedSearches()
            .then(res =>
                this.setState({
                    searches: res.data
                })
            )
            .catch(err => console.log(err));
    };

    deleteSearch = id => {
        API.deleteSearch(id).then(res => this.getSavedSearches());
    }

    render() {
        const sum = (a, b) => a + b;
        const income = this.state.income;
        const expense = this.state.expense;
        const total = income.reduce(sum, 0) - expense.reduce(sum, 0);
        const { profile } = this.state;
        return (
            <div>
                <div className="container col l12">
                    <Row>
                        <h5 className="light-blue-text">{profile.nickname}'s DreamStream</h5>
                    </Row>
                    <Row className="white-text flow-text">
                        <img id="profile-pic" src={profile.picture} alt="profile" />
                        Hi, {profile.nickname}! Welcome to your personal DreamStream page. 
                        This is where you can add or remove streaming services to your monthly budget. 
                    </Row>

                    <Modal
                      header="My Monthly Subscription Costs"
                      className="grey lighten-4"
                      fixedFooter
                      trigger={<Button className="budget-btn btn-large waves-effect waves-light light-blue white-text"><i className="material-icons medium">attach_money</i>My Monthly Budget</Button>}>
                        <div className="col l4">
                            <Autocomplete
                                title='Streaming Services'
                                data={
                                    {
                                        'Amazon Prime': null,
                                        'CBS All-Access': null,
                                        'Crunchyroll Premium': null,
                                        'Fandor': null,
                                        'FilmStruck': null,
                                        'FlixFling': null,
                                        'Gaiam TV': null,
                                        'Hallmark Movies Now': null,
                                        'HBO Now': null,
                                        'Hulu': null,
                                        'Hulu with Showtime': null,
                                        'IndieFlix': null,
                                        'MUBI': null,
                                        'National Geographic Kids': null,
                                        'Netflix': null,
                                        'NBA League Pass': null,
                                        'Seeso': null,
                                        'Sesame Street Go': null,
                                        'Showtime': null,
                                        'Shudder': null,
                                        'STARZ': null,
                                        'SundanceNow Doc Club': null,
                                        'Tribeca Shortlist': null,
                                        'Warner Archive Instant': null,
                                        'WWE Network': null,
                                    }
                                }
                                onAutocomplete= {(value)=>{
                                    console.log(value);
                                }}
                            />
                        </div>
                        <div className="input-field col l4 offset-l2">
                            <input type="number" id="service-cost" placeholder="Monthly Subscription Cost" step="0.01" min="1.00" max="99.99" ref="value" />
                        </div>
                        <div className="input-field addValue">
                            <select className="browser-default col 6" ref="valueType">
                                <option value="" disabled selected>Would You Like to Add or Remove This Service?</option>
                                <option value="income">Add</option>
                                <option value="expense">Remove</option>
                            </select>    
                        </div>
                        <Button type="button" className="waves-effect waves-light center btn btn-small light-blue white-text calculate" onClick={ this.addValue }>Add/Remove</Button>
                        
                        <div className="monthly-budget">
                            {/* <h6>My Streaming Services: <Values values={ this.state.income } /></h6>
                            <h6>Canceled Services: <Values values={ this.state.expense } /></h6> */}
                            <h4>Monthly Streaming Expenses: ${ total }</h4>
                            <h5>Average Monthly Cable Subscription: $72.60*</h5>
                            <h6>*Based on national averages for tv only subscriptions <a href="https://www.cabletv.com/blog/how-much-should-i-pay-for-cable-tv/" target="__blank">LINK</a></h6>
                        </div>
                    </Modal>
                    <Row>
                        <Col>
                            <Card>
                                {this.state.searches.length ? (
                                    <div>
                                        {this.state.searches.map(search => (
                                            <SavedBox
                                                name={search.name}
                                                genres={search.genres.join(", ")}
                                                officialSite={search.officialSite}
                                                network={search.network}
                                                webChannel={search.webChannel}
                                                image={search.image}
                                                summary={search.summary}
                                                Button={() => (
                                                    <button
                                                        onClick={() => this.deleteSearch(search._id)}
                                                        className="btn btn-danger"
                                                    >Delete Save
                                                    </button>
                                                )}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                  <h2>No Saved Searches</h2>  
                                )}
                            </Card>
                        </Col>
                    </Row>
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

// const Values = ({
//     values
// }) => {
//     return (
//         <span>
//             { values.map((value, i) =>
//                 <p key={`value-${i}`}>
//                     { value }
//                 </p>
//             )}
//         </span>
//     )
// }


// const Values = ({
//     values
// }) => {
//     return (
//         <ul>
//             { values.map((value, i) =>
//                 <li key={`value-${i}`}>
//                     { value } 
//                 </li>
//             )}
//         </ul>
//     );
// }

export default Profile;
