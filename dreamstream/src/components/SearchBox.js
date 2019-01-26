import React from "react";

function SearchBox({ query, handleInputChange, handleSearchSubmit }) {
    return (
        <form className="white-text">
            <input placeholder="Search by Series, Movie Channel, Genre or Streaming Service"
            className="white-text"
            type="text"
            onChange={handleInputChange}
             />
            <button className="waves-effect waves-lightbtn btn-primary light-blue"
            onClick={handleSearchSubmit}
            >Submit</button>
        </form>
    )
}

export default SearchBox;