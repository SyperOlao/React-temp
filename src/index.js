import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {old_store} from "./state_old/old_store"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App state={old_store.getState()}
                     addPost={old_store.addPost.bind(old_store)}
                     updateNewPostText={old_store.updateNewPostText.bind(old_store)}
                />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);




