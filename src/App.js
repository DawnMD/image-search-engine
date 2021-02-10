import React, { Component } from "react";
import unsplash from "../src/apis/unsplash";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    // console.log(term);
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(this);
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
