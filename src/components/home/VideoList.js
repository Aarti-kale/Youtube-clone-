import React from 'react'
// import VideoListItem from './VideoListItem'
import VideoThumbnail from '../common/VideoThumbnail';

const VideoList = ({videos}) => {
  return (
    <ul>
        {videos.map((video)=> (
            <VideoThumbnail 
            key={video.id}
            title={video.title}
            duration={video.duration}
            thumbnailUrl={video.thumbnail}

            />
        ))}
    </ul>
  )
}

export default VideoList;
