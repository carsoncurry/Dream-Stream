import React, { Component } from 'react';
import { Card, CardTitle, Row, Toast } from 'react-materialize';
import API from "../../utils/API"
import './Search.css';

class Search extends Component {
    state = {
        search: [],
        query: "",
        message: "state message"
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    saveSearch = name => {
        const search = this.state.search[0];

        if (!search) {
            console.log("nothing to search")
        }

        const saveBody = {
            name: search.name,
            type: search.type,
            language: search.language,
            genres: search.genres,
            officialSite: search.officialSite,
            network: search.network ? search.network.name : "unavailable",
            webChannel: search.webChannel ? search.webChannel.name : "unavailable",
            image: search.image.original,
            summary: search.summary
        };

        console.log(saveBody);

        alert('Thanks! This show has been added to your profile!');

        API.saveSearch(saveBody)
            .then(data => console.log(data, "search has been saved"))
            .catch((error) => {
                console.log(error)
                this.setState({
                    message: "Search not saved"
                })
            }
            )
    };

    getNewSearch = () => {
        API.getSearches(this.state.query)
            .then(res =>
                this.setState({
                    search: [res.data]
                },
                    console.log(this.state.search),
                    console.log(res.data))
            )
            .catch(() =>
                this.setState({
                    search: "",
                    message: "Search not found"
                })
            );
        // this.saveSearch(this.state.search);
    };


    areLoggedIn = () => {
        // add logged in info
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        this.getNewSearch();
        console.log("submit")
    };

    render() {
        return (

            <div className="container home">
                <Card className='large grey darken-4 center z-depth-1'
                    header={<CardTitle image='https://i.gifer.com/DMV.gif'>
                        <h4 className="white-text center">Search the Streams</h4>
                    </CardTitle>}>

                    <form className="white-text">
                        <input placeholder="Search for a Series"
                            className="white-text"
                            type="text"
                            value={this.state.query}
                            name="query"
                            onChange={this.handleInputChange}
                            required />
                        <button className="waves-effect waves-light btn btn-primary light-blue"
                            onClick={this.handleSearchSubmit}>Submit</button>
                    </form>
                </Card>


                <div className="row">
                    <Card className="transparent">
                        <h4 className="white-text">Search Results</h4>
                        {this.state.search.map(search =>
                            <div key={search.id} >
                                <Row>
                                    <h3 id="show-name" className="white-text">{search.name}</h3>
                                </Row>
                                <div class="show-info white-text">
                                    <Row>
                                    <img className="col l3" id="show-image" src={search.image.original} alt="official" />
                                    <div className="col l7 offset-l1">
                                        <h5 id="show-source">Streaming Channel: {search.webChannel ? search.webChannel.name : "unavailable"}</h5>
                                        <h6 id="show-network">Original Network: {search.network ? search.network.name : "unavailable"}</h6>
                                        <h6 id="show-website">Official Website: {search.officialSite}</h6>
                                        <h6 id="show-status">Is It Running? {search.status}</h6>
                                        <h6 id="show-genre">Genre(s): {search.genres.join(" / ")}</h6>
                                        <div dangerouslySetInnerHTML={{ __html: search.summary }} />
                                    </div>
                                    </Row>
                                    <Row className="toast-row">
                                        <Toast id="toast" toast="This show has been added to your profile!" className="waves-effect waves-light light-blue col 6lg" onClick={this.saveSearch}>Save This Show</Toast>
                                    </Row>
                                </div>
                            </div>
                        )}

                    </Card>

                </div>
                <div className="row">

                </div>

                <div className="result container">
                    <div className="grey darken-4">
                    </div>
                </div>
            </div>
        )
    }
};

export default Search;
