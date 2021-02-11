import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import {NavPage} from "./Components/Navbar/NavPage";
import Route from "react-router-dom/es/Route";
import {Profile} from "./Components/Content/Profile Page/Profile";
import {BrowserRouter} from "react-router-dom";
import {Message} from "./Components/Content/Messages/Message";
import {News} from "./Components/Content/News/News";
import {Friends} from "./Components/Content/Friends/Friends";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <NavPage/>

                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/message' component={Message}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/friends' component={Friends}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
