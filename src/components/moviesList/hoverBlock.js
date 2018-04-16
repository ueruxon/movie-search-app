import React from 'react';
import _ from "lodash";

const hoverBlock = ({ genres, genresId }) => {
    let genreList;
    
    if (genres.find(item => item.id)) {
        genreList = genres.map(genre => <div key={genre.id}>{genre.name}</div>)
    } else {
        const genresM = _.filter(genresId, genre => genres.includes(genre.id));
        genreList = genresM.map(genre => <div key={genre.id}>{genre.name}</div>)
    }
    
    return (
        <div className="hover-block">
            {genreList}
        </div>
    )
}

export default hoverBlock;