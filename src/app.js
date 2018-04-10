import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import MovieIndex from "./containers/movieIndex";
import Movie from "./components/movie/index";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter >
                <div>
                    <Switch>
                        <Route exact path="/" component={MovieIndex}/>
                        <Route path="/pages/:id" component={MovieIndex} />
                        <Route path="/movie/:id" component={Movie} />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

export default App;