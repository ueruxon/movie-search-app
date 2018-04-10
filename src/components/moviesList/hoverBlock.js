import React from 'react';
import _ from "lodash";

const hoverBlock = ({ genres, genresId }) => {

    const genre = _.filter(genresId, movie => genres.includes(movie.id))
    const genreList = genre.map(movie => {
        return (
            <div key={movie.id}>{movie.name}</div>
        )
    })
    
    return (
        <div className="hover-block">
            {genreList}
        </div>
    )
}

export default hoverBlock;