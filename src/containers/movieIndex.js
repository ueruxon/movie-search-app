import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import SearchForm from "../components/searchForm/index";
import MoviesList from "../components/moviesList/index";
import NavLink from "../components/navigations/index";

import { fetchAllMovies } from "../actions/fetchAllMovies";

class MovieIndex extends React.Component {

    state = {
        searchValue: '',  
    }

    componentDidMount() {
        this.props.fetchAllMovies(this.props.match.params);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            window.scrollTo(0, 0);
            this.props.fetchAllMovies(this.props.match.params);
        }
    }

    render() {
        const { allMovies, genresId } = this.props;

        if (!allMovies) return <div>Loading...</div>;
        
        return (
            <Fragment>
                <div className="container">
                    <SearchForm handleChange={(value) => this.setState({ searchValue: value })} />
                </div>
                <main className="col-md-10">
                    <MoviesList movies={allMovies} genresId={genresId}/> 
                </main>
                <div className="container">
                    <nav className="navigation">
                        <NavLink totalPages={this.props.allMovies.total_pages}/>
                    </nav>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    allMovies: state.allMovies.allMovies,
    genresId: state.allMovies.genres,
})

export default connect(mapStateToProps, { fetchAllMovies })(MovieIndex);