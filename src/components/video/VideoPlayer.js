import React from 'react'

const VideoPlayer = ({videoId}) => {
  return (
    <div>
      <h2>Video Player</h2>
      <iframe 
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Youtube video player"
        frameBorder="0"
        allowFullScreen

      ></iframe>
    </div>
  )
}

export default VideoPlayer;
