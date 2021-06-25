import {combineReducers} from "redux";
import {addPost} from "./reducers/addPost";
import {updateNewPostText} from "./reducers/updateNewPostText";


export let postPageReducer = combineReducers({addPost, updateNewPostText});