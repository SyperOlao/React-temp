import React from "react";
import './index.css';
import {MainPage} from "./Components/MainPage/MainPage";

function App(props) {
    return (
        <div>
            <MainPage state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
