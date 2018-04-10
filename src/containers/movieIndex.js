import React, { Fragment } from 'react';
import { connect } from "react-redux";

import SearchForm from "../components/searchForm/index";
import MoviesList from "../components/moviesList/index";
import NavLink from "../components/navigations/index";

import { fetchAllMovies } from "../actions/fetchAllMovies";
import { setCurrentMovie } from "../actions/setCurrentMovie";
import { fetchVideo } from "../actions/fetchVideo";

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

    setMovie = (id) => {
        this.props.setCurrentMovie(id);
        this.props.fetchVideo(id);
    }

    render() {
        const { allMovies, genresId } = this.props;

        if (!allMovies) return <div>Loading...</div>
        
        return (
            <Fragment>
                <div className="container">
                    <SearchForm handleChange={(value) => this.setState({ searchValue: value })} />
                </div>
                <main className="col-md-10">
                    <MoviesList movies={allMovies} genresId={genresId} movieClick={this.setMovie}/> 
                </main>
                <div className="container">
                    <nav className="navigation">
                        <NavLink totalPages={this.props.allMovies.total_pages} 
                            currentPage={this.props.match.params.id}
                        />
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

export default connect(mapStateToProps, { fetchAllMovies, setCurrentMovie, fetchVideo })(MovieIndex);