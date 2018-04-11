import React from 'react';
import { Link } from "react-router-dom";

import HoverBlock from "../moviesList/hoverBlock";

const recomList = ({ recList, genresId, movieClick }) => {

    const createList = () => {
        if (!recList || recList.length === 0) {
            return <div> Нет рекомендованных видео</div>
        }

        return (
            <ul className="cards-rec">
                {recList.splice(0, 8).map(movie => {
                    const title = movie.title.length < 25 ? movie.title : movie.title.substring(0, 25) + "...";

                    return (
                        <li className="card card-rec" key={movie.id}>
                            <HoverBlock genresId={genresId} genres={movie.genre_ids} />
                            <Link to={`/movie/${movie.id}`} onClick={() => movieClick(movie.id)}> 
                                <img className="card-img-top" src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                    alt="movie.title" />
                            </Link>
                            <div className="card-body">
                                <p>{title}({movie.release_date.substring(0, 4)})</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <section className="block-content">
            <p>Похожие фильмы:</p>
            {createList()}
        </section>
    )
}

export default recomList;