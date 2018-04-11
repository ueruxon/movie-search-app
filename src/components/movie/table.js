import React from 'react';

const Rating = require('react-rating');

const table = ({ genres, release, rating, genresId, budget, cast }) => {
    const nameGenre = genres.reduce((acc, gen) => acc += gen.name + ', '  , '');
    const nameActors = cast.splice(0, 5).reduce((acc, val, i) => acc += val.name + ', ', '');
    
    return (
        <table className="table table-striped">
            <tbody>
                <tr>
                    <th scope="row">Оценка</th>
                    <td>
                        <Rating initialRating={rating}
                            stop={10}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            fractions={2}
                            readonly={true} />
                    </td>
                </tr>
                <tr>
                    <th scope="row">Бюджет</th>
                    <td>{budget}$</td>
                </tr>
                <tr>
                    <th scope="row">Жанры</th>
                    <td>{nameGenre}</td>
                </tr>
                <tr>
                    <th scope="row">В главных ролях</th>
                    <td>{nameActors}</td>
                </tr>
                <tr>
                    <th scope="row">Премьера</th>
                    <td>{release}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default table;