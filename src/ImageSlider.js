// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return <p>I am on slide {this.state.currentSlideIndex}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default ImageSlider;
