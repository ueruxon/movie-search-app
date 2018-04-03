import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import MovieIndex from "./containers/movieIndex";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter >
                <div>
                    <Switch>
                        <Route exact path="/" component={MovieIndex}/>
                        <Route path="/pages/:id" component={MovieIndex} />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

export default App;