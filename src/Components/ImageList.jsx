import React, { Component } from "react";

class ImageList extends Component {
  render() {
    const images = this.props.images.map(({ id, urls, alt_description }) => {
      return <img key={id} src={urls.regular} alt={alt_description} />;
    });
    return <div>{images}</div>;
  }
}
export default ImageList;
