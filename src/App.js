import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./Components/MainPage/MainPage";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <MainPage state={props.state}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
