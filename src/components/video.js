import React from 'react'
import video from './video.module.scss' 

const Video = ({videoSrcUrl, videoTitle}) => (
    <div className={video.video}>
    <iframe
        src={videoSrcUrl}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
    />
    </div>
)

export default Video;