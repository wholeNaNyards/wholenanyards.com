import React from 'react';
import ReactDOM from 'react-dom';

class VideoGIF extends React.Component {
  componentDidMount() {
    const video = ReactDOM.findDOMNode(this).getElementsByTagName('video')[0];
    video.muted = true;
    video.addEventListener(
      'ended',
      () => {
        setTimeout(() => {
          video.play();
        }, this.props.loopDuration);
      },
      false,
    );
    video.play();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default VideoGIF;
