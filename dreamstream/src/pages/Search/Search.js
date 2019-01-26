import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import API from "../../utils/API"
import SearchBox from "../../components/SearchBox"

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
                    header={<CardTitle image='https://i.gifer.com/DMV.gif'><h4 className="white-text center">Search the Streams</h4></CardTitle>}
                >
                    <form className="white-text">
                        <input placeholder="Search by Series, Movie, Channel, Genre or Streaming Service" 
                        className="white-text" 
                        type="text"
                        value={this.state.query}
                        name="query"
                        onChange={this.handleInputChange}
                        required />
                        <button className="waves-effect waves-light btn btn-primary light-blue"
                        onClick={this.handleSearchSubmit}>Submit</button>
                    </form>
                    <SearchBox
                        handleSearchSubmit={this.handleSearchSubmit}
                        query={this.state.query}
                    />
                </Card>


                <div className="row">
                <Card title="search-results">

                    {this.state.search.map(search => 
                        <div key={search.id} >
                        <div>{search.name}</div>
                        <div>{search.type}</div>
                        <div>{search.officialSite}</div>
                        {/* <div>{search.genre}</div> */}
                        {/* <div>{search.image}</div> */}
                        <div>{search.summary}</div>
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
