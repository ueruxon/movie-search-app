import React from 'react';

import HoverBlock from "./hoverBlock";

const Rating = require('react-rating');

const moviesList = ({ movies, genresId }) => {

    const list = movies.results.map(item => {
        const title = item.title.length < 35 ? item.title : item.title.substring(0, 35) + "..."

        return (
            <li className="card" key={item.id} >
                <HoverBlock genres={item.genre_ids} genresId={genresId}/>
                <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={title} className="card-img-top"/>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <div className="rating">
                        <Rating initialRating={item.vote_average / 2}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            fractions={2}
                            readonly={true} />
                    </div>
                    <button type="button" className="btn btn-outline-secondary favorites">В избранное</button>
                </div>
            </li>
        )
    })

    return (
        <ul className="cards">
            {list}
        </ul>
    )
}

export default moviesList;