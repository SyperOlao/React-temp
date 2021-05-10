import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {store} from "./state_old/store"
import {store} from "./state/store";
import {BrowserRouter} from "react-router-dom";

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderTree(store.getState());
store.subscribe(() => renderTree(store.getState()))

reportWebVitals();
