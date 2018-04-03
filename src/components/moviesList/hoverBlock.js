import React from 'react';
import _ from "lodash";

const hoverBlock = ({ genres, genresId }) => {

    const genre = _.filter(genresId, item => genres.includes(item.id))
    const genreList = genre.map(item => {
        return (
            <div key={item.id}>{item.name}</div>
        )
    })
    
    return (
        <div className="hover-block">
            {genreList}
        </div>
    )
}

export default hoverBlock;