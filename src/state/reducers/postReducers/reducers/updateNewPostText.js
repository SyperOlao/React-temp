import {TEXT_ON_TEXTBOX} from "../../../actions/actionsTypes";
import {initialState} from "../../../initialState";

export const updateNewPostText = (state=initialState.profilePagePost, action) => {
    switch (action.type){
        case TEXT_ON_TEXTBOX:
            state.tempPost = action.text;
            return state;
        default:
            return state;
    }
}