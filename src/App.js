import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  onSearchSubmit = (term) => {
    // console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID ONCkee_5wvu3cPqgTLATCOZHo4tOQOMQRtGq4YB3w2c",
      },
      params: { query: term },
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
