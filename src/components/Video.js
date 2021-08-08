import React from 'react';
import video from '../assets/video2.mp4';
// import video from '../assets/forest-bg.mp4';
import '../styles/video.scss';

const Video = () => (
  <div className="videoContainer">
    <video
      playsInline
      autoPlay
      muted
      loop
    >
      <source src={video} type="video/mp4" />
    </video>
  </div>
);

export default Video;
