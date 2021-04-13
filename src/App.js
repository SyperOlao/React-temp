import React from "react";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./Components/MainPage/MainPage";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <MainPage state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
