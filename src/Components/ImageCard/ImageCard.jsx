import React, { Component, createRef } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const spans = Math.ceil(this.imgRef.current.clientHeight / 10);
    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
