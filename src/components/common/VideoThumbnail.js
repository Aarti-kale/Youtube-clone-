import React from 'react';


const VideoThumbnail = ({thumbnailUrl, alt, title, duration, thumbnail})=>{
    const imageUrl = process.env.PUBLIC_URL + thumbnailUrl;
    return(
        <div>
            <img src={thumbnailUrl} alt={title}/>
            <p>{title}</p>
            <p>{duration}</p>
        </div>
    )
};

export default VideoThumbnail;
