import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import  _  from "lodash";

import * as ls from './localStorage';
import reducers from './reducers';

import App from "./app";


// --------- Сраный костыль ------

const favoritesList = ls.load('favorites');

const initialState = createStore(reducers);
const prevStore = initialState.getState();

const store = createStore(reducers, {
    ...prevStore,
    allMovies: {
        ...prevStore.allMovies,
        favorites: favoritesList || prevStore.allMovies.favorites
    }
}, applyMiddleware(promise));

store.subscribe(_.debounce(() => {
    const { allMovies: { favorites } } = store.getState();
    ls.save('favorites', favorites);
}), 200);

// --------- Конец сраного костыля ------


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >
, document.getElementById('root'));



