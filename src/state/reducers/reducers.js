import {combineReducers} from "redux";
import {messageReducer} from "./postReducers/messageReducer";


export let reducers = combineReducers({messageReducer});