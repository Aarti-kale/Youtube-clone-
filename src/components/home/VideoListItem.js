import React from 'react'
import VideoThumbnail from '../common/VideoThumbnail'

const VideoListItem = ({video}) => {
  return (
    <li>
        <VideoThumbnail thumbnailUrl={`/imges/thumbnail_${video.id}.jpg`} alt = {video.title} />
        <h3>{video.title}</h3>
        <p>{video.body}</p>
    </li>
  )
}

export default VideoListItem;
