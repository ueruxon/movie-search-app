import React from 'react';

const videoTrailer = ({video}) => {
    
    const createVideo = () => {
        if (!video || video.length === 0) {
            return <div> По данному фильму нет видео </div>
        }
        return (
            <iframe className="video-player" width="860" height="480"
                src={`https://www.youtube.com/embed/${video[0].key}?rel=0`}
                frameBorder="0" allowFullScreen >
                
            </iframe>
        )
    }

    return (
        <section className="block-content">
            <div className="video-wrapper">
                {createVideo()}
            </div>
        </section>
    )
}

export default videoTrailer;