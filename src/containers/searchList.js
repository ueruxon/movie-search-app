import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../components/searchForm/index";
import MoviesList from "../components/moviesList/index";
import MainLoader from "../components/preloaders/mainLoader";
import Profile from "../components/buttons/profile";

import {
    fetchCredits,
    fetchVideo,
    resetAllMovies,
    resetCurrentMovie,
    fetchRecommendations,
    fetchMovie,
    searchMovie,
    addFavorites,
    deleteFavorites
} from "../actions/index";


class SearchList extends React.Component {

    state = {
        searchValue: '',
    }

    search = (event) => {
        event.preventDefault();
        if (this.state.searchValue === '') return;

        this.props.searchMovie(this.state.searchValue);
        this.setState({ searchValue: '' });
    }

    setMovie = (id) => {
        this.props.resetCurrentMovie();
        this.props.fetchMovie(id);
        this.props.fetchCredits(id);
        this.props.fetchVideo(id);
        this.props.fetchRecommendations(id);
    }

    results = () => {
        if (this.props.allMovies.length === 0) {
            return (
                <div className="container">По вашему запросу нечего не найдено...</div>
            )   
        }

        return <MoviesList movies={this.props.allMovies} 
            genresId={this.props.genresId}
            favorites={this.props.favorites}
            addFavorites={this.props.addFavorites}
            deleteFavorites={this.props.deleteFavorites}
            movieClick={this.setMovie} />
    }

    render() {
        const { allMovies } = this.props;

        if (!allMovies) return <MainLoader />
        
        return (
            <Fragment>
                <SearchForm
                    handleChange={(value) => this.setState({ searchValue: value })}
                    search={this.search}
                    value={this.state.searchValue}
                    reset={this.props.fetchMovies} />
                <main className="col-md-10">
                    {this.results()}
                </main>
                <Profile />
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    allMovies: state.allMovies.movies,
    genresId: state.allMovies.genres,
    favorites: state.allMovies.favorites,
})

export default connect(mapStateToProps, {
    fetchCredits,
    fetchVideo,
    resetAllMovies,
    resetCurrentMovie,
    fetchRecommendations,
    fetchMovie,
    searchMovie,
    addFavorites,
    deleteFavorites
})(SearchList);
