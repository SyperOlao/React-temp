import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./state/store"

let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={state.addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderTree(store.getState())

reportWebVitals();
