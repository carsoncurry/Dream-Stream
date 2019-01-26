import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class Search extends Component {
    render() {
        return (

            <div className="container home">
                <Card className='medium black center'
                    header={<CardTitle image='https://i.gifer.com/DMV.gif'>
                    <h4 className="white-text center">Search the Streams</h4>
                    </CardTitle>}>

                    <form className="white-text">
                        <input placeholder="Search by Series, Movie, Channel, Genre or Streaming Service" className="white-text" type="text" />
                        <button className="waves-effect waves-light btn btn-primary light-blue">Submit</button>
                    </form>
                </Card>

                <div className="result container">
                    <div className="grey darken-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
