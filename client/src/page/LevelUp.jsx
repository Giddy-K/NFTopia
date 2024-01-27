import React from 'react';
import { liveBackground } from '../assets'; // Update the path to your video

const LevelUp = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        <source src={liveBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{
        position: 'relative',
        zIndex: '1',
        padding: '20px',
        color: 'yellow',
      }}>
        {/* Your content goes here */}
        <h1>Bare with me, this mode is under development. You will be notified when it is done.
          In the mean time please enjoy the Online Multiplayer and Battle your online friends.
        </h1>
      </div>
    </div>
  );
}

export default LevelUp;
