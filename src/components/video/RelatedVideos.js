import React from 'react'
import VideoThumbnail from '../common/VideoThumbnail'

const RelatedVideos = ({RelatedVideos}) => {
  return (
    <div>
      <h2>Related Videos</h2>
      <ul>
        {RelatedVideos.map((video)=> (
            <li key={video.id}>
                <VideoThumbnail thumbnailUrl={`/images/thumbnail_${video.id}.jpg`} alt={video.title} />
                <p>{video.title}</p>
                 </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedVideos;
