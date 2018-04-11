import React from 'react';
import { Link } from "react-router-dom";

import HoverBlock from "./hoverBlock";

const Rating = require('react-rating');

const moviesList = ({ movies, genresId, movieClick }) => {
    
    const list = movies.results.map(movie => {
        const title = movie.title.length < 33 ? movie.title : movie.title.substring(0, 32) + "...";

        return (
            <li className="card" key={movie.id} >
                <HoverBlock genres={movie.genre_ids} genresId={genresId}/>
                <Link to={`/movie/${movie.id}`} onClick={() => movieClick(movie.id)}>
                    <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={title} className="card-img-top"/>
                </Link>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <div className="rating">
                        <Rating initialRating={movie.vote_average / 2}
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