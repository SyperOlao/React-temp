import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./Components/MainPage/MainPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <MainPage/>
            </BrowserRouter>
        </div>
    );
}

export default App;
