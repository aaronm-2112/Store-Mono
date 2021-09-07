import React from "react";
import "./search-bar.scss";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  search = () => {
    console.log("Axios call made");
    // push me to the search results page (component will be Page search and it will have the search-list component)
  };

  render() {
    return (
      <div className="search-bar-container">
        <input
          type="text"
          name="search-bar"
          className="search-bar"
          value={this.state.query}
          onChange={this.handleChange}
        ></input>
        <button className="search" onClick={this.search}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
