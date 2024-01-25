import React from 'react'
import VideoPlayer from '../components/video/VideoPlayer'
import RelatedVideos from '../components/video/RelatedVideos'
import VideoComments from '../components/video/VideoComments'

const WatchVideoPage = ({match}) => {

    const videoId = match.params.videoId;

    // fetch related videos data 

    const relatedVideos = [
        // sure that the id matches the  format used in videolistitem.js
        {id:6, title:'Related video 1'},
        {id:7, title:'Related video 2'},
        {id:8, title:'Related video 3'},
    ];
  return (
    <div>
      <VideoPlayer videoId={videoId}/>
      <RelatedVideos videos={relatedVideos}/>
      <VideoComments/>
    </div>
  )
}

export default WatchVideoPage;
