import React from "react";
import './index.css';
import {MainPage} from "./Components/MainPage/MainPage";

function App(props) {
    return (
        <div>
                <MainPage state={props.state}
                          addPost={props.addPost}
                          updateNewPostText={props.updateNewPostText}
                          />
        </div>
    );
}

export default App;
