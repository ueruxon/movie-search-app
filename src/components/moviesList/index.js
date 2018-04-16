import React from 'react';
import { Link } from "react-router-dom";

import HoverBlock from "./hoverBlock";
import Button from "../buttons/favorite";

const Rating = require('react-rating');

const moviesList = ({ movies, genresId, movieClick, addFavorites, favorites, deleteFavorites }) => {
    
    const list = movies.map(movie => {
        const title = movie.title.length < 33 ? movie.title : movie.title.substring(0, 32) + "...";

        const searchInFavorites = favorites.find(m => m.id === movie.id);
        const btnText = searchInFavorites ? "Из избранного" : "В избранное";
        const btnClass = searchInFavorites ? "added" : "";
        const btnFunc = searchInFavorites ? deleteFavorites : addFavorites;
        
        return (
            <li className="card" key={movie.id} >
                <HoverBlock genres={movie.genre_ids || movie.genres} genresId={genresId}/>
                <Link to={`/movie/${movie.id}`} onClick={() => movieClick(movie.id)}>
                    <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={title} className="card-img-top"/>
                </Link>
                <div className="card-body">
                    <h6 className="card-title">{title}({movie.release_date.substring(0, 4)})</h6>
                    <div className="rating">
                        <Rating initialRating={movie.vote_average / 2}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            fractions={2}
                            readonly={true} />
                    </div>
                    <Button btnText={btnText} 
                        btnClass={btnClass} 
                        id={movie.id} 
                        handleClick={btnFunc} 
                        btnClassPos="favorites" />
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