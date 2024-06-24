import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <ReactPlayer
            url={process.env.PUBLIC_URL + '/856951-hd_1920_1080_25fps.mp4'}
            width="100%"
            height="600px"
            playing={true}
            controls={false}
            loop={true}
            muted={true}
        />
    )
}

export default VideoPlayer;