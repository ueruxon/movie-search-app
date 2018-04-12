import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../components/searchForm/index";
import MoviesList from "../components/moviesList/index";
import MainLoader from "../components/preloaders/mainLoader";

import {
    fetchCredits,
    fetchVideo,
    resetAllMovies,
    resetCurrentMovie,
    fetchRecommendations,
    fetchMovie,
    searchMovie
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
        if (this.props.allMovies.total_results === 0) {
            return (
                <div className="container">По вашему запросу нечего не найдено...</div>
            )   
        }

        return <MoviesList movies={this.props.allMovies} genresId={this.props.genresId} movieClick={this.setMovie} />
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
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    allMovies: state.allMovies.movies,
    genresId: state.allMovies.genres,
})

export default connect(mapStateToProps, {
    fetchCredits,
    fetchVideo,
    resetAllMovies,
    resetCurrentMovie,
    fetchRecommendations,
    fetchMovie,
    searchMovie
})(SearchList);
