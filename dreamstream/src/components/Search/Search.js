import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container home">
                <div className="row">
                    <h4 className="light-blue-text">Search the Streams</h4>
                </div>
                <div className="row">
                    <p className="white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga laborum maxime nihil voluptates dolor quasi. Provident reiciendis eum sunt nihil in corrupti dignissimos sint atque nam, modi aliquid blanditiis!</p>
                </div>
                <form class="white-text">
                    <input placeholder="Search by Series, Movie, Channel, Genre or Streaming Service" className="white-text" type="text"/>
                    <button className="waves-effect waves-light btn btn-primary light-blue">Submit</button>
                </form>
            </div>
        )
    }
}

export default Search;
