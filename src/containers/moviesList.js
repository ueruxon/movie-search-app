import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../components/searchForm/index";
import MoviesList from "../components/moviesList/index";
import NavLink from "../components/navigations/index";
import MainLoader from "../components/preloaders/mainLoader";
import Profile from "../components/buttons/profile";

import { fetchMovies, 
    fetchCredits, 
    fetchVideo, 
    resetAllMovies, 
    resetCurrentMovie, 
    fetchRecommendations, 
    fetchMovie,
    searchMovie,
    addFavorites,
    deleteFavorites } from "../actions/index";


class MovieIndex extends React.Component {

    state = {
        searchValue: '',  
    }

    componentDidMount() {
        this.props.fetchMovies(this.props.match.params);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            window.scrollTo(0, 0);
            this.props.resetAllMovies();
            this.props.fetchMovies(this.props.match.params);
        }
    }

    search = (event) => {
        event.preventDefault();
        if (this.state.searchValue === '') return;
        
        this.props.searchMovie(this.state.searchValue)
            .then(() => this.props.history.push("/search"));
        this.setState({searchValue: ''});
    }

    setMovie = (id) => {
        this.props.resetCurrentMovie();
        this.props.fetchMovie(id);
        this.props.fetchCredits(id);
        this.props.fetchVideo(id);
        this.props.fetchRecommendations(id);
    }

    render() {
        const { allMovies, genresId, favorites } = this.props;

        if (!allMovies) return <MainLoader />
        
        return (
            <Fragment>
                <SearchForm 
                    handleChange={(value) => this.setState({ searchValue: value })} 
                    search={this.search} 
                    value={this.state.searchValue}
                    reset={this.props.fetchMovies} />
                <main className="col-md-10">
                    <MoviesList movies={allMovies} 
                        genresId={genresId} 
                        movieClick={this.setMovie}
                        addFavorites={this.props.addFavorites}
                        deleteFavorites={this.props.deleteFavorites}
                        favorites={favorites} /> 
                </main>
                <Profile/>
                <div className="container">
                    <nav className="navigation">
                        <NavLink totalPages={980} />
                    </nav>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    allMovies: state.allMovies.movies,
    genresId: state.allMovies.genres,
    favorites: state.allMovies.favorites
})

export default connect(mapStateToProps, { 
    fetchMovies, 
    fetchCredits, 
    fetchVideo, 
    resetAllMovies, 
    resetCurrentMovie, 
    fetchRecommendations, 
    fetchMovie,
    searchMovie,
    addFavorites,
    deleteFavorites
})(MovieIndex);

    