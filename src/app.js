import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import MoviesList from "./containers/moviesList";
import Movie from "./containers/movie";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter >
                <div>
                    <Switch>
                        <Route exact path="/" component={MoviesList}/>
                        <Route path="/pages/:id" component={MoviesList} />
                        <Route path="/movie/:id" component={Movie} />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

export default App;