import {postPageReducer} from "./postReducers/PostPageReducer";
import {combineReducers} from "redux";


export let reducers = combineReducers({
        profilePagePost: postPageReducer
});