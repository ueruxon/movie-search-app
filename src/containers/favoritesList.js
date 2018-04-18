import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../components/searchForm/index";
import MoviesList from "../components/moviesList/index";

import {
    resetAllMovies,
    fetchCredits,
    fetchVideo,
    resetCurrentMovie,
    fetchRecommendations,
    fetchMovie,
    searchMovie,
    addFavorites,
    deleteFavorites
} from "../actions/index";

class Favorites extends React.Component {

    state = {
        searchValue: '',
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    setMovie = (id) => {
        this.props.resetCurrentMovie();
        this.props.fetchMovie(id);
        this.props.fetchCredits(id);
        this.props.fetchVideo(id);
        this.props.fetchRecommendations(id);
    }

    search = (event) => {
        event.preventDefault();
        if (this.state.searchValue === '') return;

        this.props.searchMovie(this.state.searchValue)
            .then(() => this.props.history.push("/search"));
        this.setState({ searchValue: '' });
    }

    render() {
        const { favorites, genresId } = this.props;

        return (
            <Fragment> 
                    <SearchForm
                        handleChange={(value) => this.setState({ searchValue: value })}
                        search={this.search}
                        value={this.state.searchValue}
                        reset={this.props.resetAllMovies} />
                <div className="col-md-10">
                    <MoviesList movies={favorites}
                        genresId={genresId}
                        movieClick={this.setMovie}
                        addFavorites={this.props.addFavorites}
                        deleteFavorites={this.props.deleteFavorites}
                        favorites={favorites}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.allMovies.favorites,
    genresId: state.allMovies.genres,
})

export default connect(mapStateToProps, {
    resetAllMovies,
    fetchCredits,
    fetchVideo,
    resetCurrentMovie,
    fetchRecommendations,
    fetchMovie,
    searchMovie,
    addFavorites,
    deleteFavorites
})(Favorites);