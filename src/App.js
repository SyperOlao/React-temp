import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import NavPage from "./Components/Navbar/NavPage";
import Route from "react-router-dom/es/Route";
import Profile from "./Components/Content/Profile Page/Profile";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
        <Header />
        <NavPage/>
        <BrowserRouter>
        <Route path='/profile' component={Profile}/>
        {/*<div className={classes.navList}><Route path="/message" component={Message}/>Message</div>
        <div className={classes.navList}><Route path="/news" component={News}/>News</div>
        <div className={classes.navList}><Route path="/friends" component={Friends}/>Friends</div>*/}
        </BrowserRouter>
    </div>
  );
}

export default App;
