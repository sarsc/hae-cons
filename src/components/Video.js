import React, { useRef } from 'react';
import video from '../assets/forest-bg.mp4';
import '../styles/video.scss';

const Video = () => {
  const videoRef = useRef();
  const playBackSpeed = () => {
    videoRef.current.playbackRate = 1;
  };

  return (
    <div className="videoContainer">
      <video
        autoPlay
        loop
        muted
        ref={videoRef}
        onCanPlay={playBackSpeed}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
