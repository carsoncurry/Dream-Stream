import React from "react";
import { Row } from 'react-materialize';

function Saved({ name, genres, officialSite, network, webChannel, image, summary }) {
    return (
        <div>
            <Row>
                <h3 id="show-name">{name}</h3>
            </Row>
            <Row class="show-info">
                <img className="col l3" id="show-image" src={image} alt="official"/>
                <div className="col l7 offset-l1">
                    {/* {/* <h5 id="show-source">Streaming Channel: {search.webChannel.name}</h5> */}
                    <h6 id="show-network">Original Network: {network}</h6>
                    <h6 id="show-website">Official Website: {officialSite}</h6>
                    {/* <h6 id="show-status">Is It Running? {search.status}</h6> */}
                    <h6 id="show-genre">Genre(s): {genres.join(" / ")}</h6>
                    <div id="show-summary">Summary: {summary}</div>
                    {/* <button className="waves-effect waves-light btn btn-small light-blue">Save This Show</button> */}
                </div>
            </Row>
        </div>    
    )
}

export default Saved;