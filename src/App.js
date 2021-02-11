import React from "react";
import './App.css';
import {Profile} from "./Components/Content/Profile Page/Profile";
import {BrowserRouter} from "react-router-dom";
import {Message} from "./Components/Content/Messages/Message";
import {News} from "./Components/Content/News/News";
import {Friends} from "./Components/Content/Friends/Friends";
import {MainPage} from "./Components/MainPage/MainPage";
import Route from "react-router-dom/es/Route";

function App() {
    return (
        <div>
            <BrowserRouter>
                <MainPage/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/message' component={Message}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/friends' component={Friends}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
