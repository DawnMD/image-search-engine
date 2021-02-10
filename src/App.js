import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    // console.log(term);
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID ONCkee_5wvu3cPqgTLATCOZHo4tOQOMQRtGq4YB3w2c",
      },
      params: { query: term },
    });
    console.log(this);
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
