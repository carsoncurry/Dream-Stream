import React, { Component } from 'react';
import { Card, CardTitle, Row } from 'react-materialize';
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
        const search = this.state.search.find(search => search.name === name);

        if(search){

        API.saveSearch({
            name: search.name,
            type: search.type,
            language: search.language,
            genres: search.genres,
            officialSite: search.officialSite,
            network: search.network.name,
            webChannel: search.webChannel.name,
            image: search.image.original,
            summary: search.summary
        })
        console.log("saved")
    }
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
            this.saveSearch(this.state.search);
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
                <Card className='medium black center'
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
                <Card title="Search Results">

                    {this.state.search.map(search =>
                        <div key={search.id} >
                            <Row>
                                <h3 id="show-name">{search.name}</h3>
                            </Row>
                            <Row class="show-info">
                                <img class="col l3" id="show-image" src={search.image.original} alt="official"/>
                                <div class="col l7 offset-l1">
                                    {/* <h5 id="show-source">Streaming Channel: {search.webChannel.name}</h5> */}
                                    {/* <h6 id="show-network">Original Network: {search.network.name}</h6> */}
                                    <h6 id="show-type">Show Type: {search.type}</h6>
                                    <h6 id="show-website">Official Website: {search.officialSite}</h6>
                                    <h6 id="show-genre">Genre(s): {search.genres}</h6>
                                    <div id="show-summary">Summary: {search.summary}</div>
                                    <button class="waves-effect waves-light btn btn-small light-blue">Save This Show</button>
                                </div>
                            </Row>
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
}

export default Search;
