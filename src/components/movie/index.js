import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../searchForm/index";
import Table from "./table";
import Video from "./video";

class Movie extends React.Component {

    createMovieItem = () => {
        const { id, title, overview, poster_path, genre_ids, release_date, vote_average, original_title} = this.props.currentMovie;

        return (
            <Fragment>
                <section key={id} className="block-content">
                    <div className="header-content">
                        <div className="header-left">
                            <img className="header-left__img" src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
                            <button type="button" className="btn btn-outline-secondary">В избранное</button>
                        </div>
                        <div className="header-right">
                            <h4>{title}</h4>
                            <Table genres={genre_ids} 
                                release={release_date} 
                                rating={vote_average}
                                genresId={this.props.genresId}
                                originalTatle={original_title}
                                cast={this.props.cast}
                            />
                        </div>
                    </div>
                    <div className="main-content">
                        <p className="card-text">{overview}</p>
                    </div>
                </section>
                <Video video={this.props.video}/>
            </Fragment>
        )
    }

    render() {
        if (!this.props.currentMovie) return <div>Loading...</div>;
        
        return (
            <div className="container">
                <SearchForm />
                <main className="col-md-10 layout-content">
                    {this.createMovieItem()}
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentMovie: state.allMovies.currentMovie,
    genresId: state.allMovies.genres,
    cast: state.allMovies.cast,
    video: state.getVideo.currentVideo,
})

export default connect(mapStateToProps)(Movie);