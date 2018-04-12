import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../components/searchForm/index";
import Table from "../components/movie/table";
import Video from "../components/movie/video";
import RecomList from "../components/movie/recomList";
import MainLoader from "../components/preloaders/mainLoader";

import { fetchVideo, 
    resetCurrentMovie, 
    fetchRecommendations, 
    fetchMovie, 
    fetchCredits,
    resetAllMovies,
    searchMovie} from "../actions/index";

class Movie extends React.Component {

    state = {
        searchValue: '',
    }

    search = (event) => {
        event.preventDefault();
        this.props.searchMovie(this.state.searchValue)
            .then(() => this.props.history.push("/search"));
            
    }

    setMovie = (id) => {
        this.props.resetCurrentMovie();
        this.props.fetchMovie(id);
        this.props.fetchCredits(id);
        this.props.fetchVideo(id);
        this.props.fetchRecommendations(id);
    }

    createMovieItem = () => {
        const { id, title, overview, poster_path, genres, release_date, vote_average, budget } = this.props.currentMovie;

        return (
            <Fragment>
                <section key={id} className="block-content">
                    <div className="header-content">
                        <div className="header-left">
                            <img className="header-left__img" src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                            <button type="button" className="btn btn-outline-secondary">В избранное</button>
                        </div>
                        <div className="header-right">
                            <h4>{title}</h4>
                            <Table genres={genres}
                                release={release_date}
                                rating={vote_average}
                                genresId={this.props.genresId}
                                budget={budget}
                                cast={this.props.cast}
                            />
                        </div>
                    </div>
                    <div className="main-content">
                        <p className="card-text">{overview}</p>
                    </div>
                </section>
                <Video video={this.props.video} />
                <RecomList recList={this.props.recList} genresId={this.props.genresId} movieClick={this.setMovie} />
            </Fragment>
        )
    }

    render() {
        if (!this.props.currentMovie || !this.props.cast) return <MainLoader />
        
        return (
            <div className="container">
                <SearchForm reset={() => this.props.resetAllMovies()}
                    handleChange={(value) => this.setState({ searchValue: value })}
                    value={this.state.searchValue} 
                    search={this.search} />
                <main className="col-md-10">
                    {this.createMovieItem()}
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentMovie: state.allMovies.currentMovie,
    genresId: state.allMovies.genres,
    cast: state.credits.cast,
    video: state.getVideo.currentVideo,
    recList: state.recList.recommendations,
})

export default connect(mapStateToProps, { 
    fetchVideo, 
    resetCurrentMovie, 
    fetchRecommendations,
    fetchMovie, 
    fetchCredits, 
    resetAllMovies,
    searchMovie 
})(Movie);