import {ADD_LIKE} from "../../../actions/actionsTypes";

export const addLikeActionCreator = (index) => ({type: ADD_LIKE, index: index});