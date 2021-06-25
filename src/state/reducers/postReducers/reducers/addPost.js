import {ADD_POST} from "../../../actions/actionsTypes";
import {initialState} from "../../../initialState";



export const addPost = (state=initialState.profilePage.profilePagePost, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.tempPost !== '' && state.tempPost.trim()) {
                let temp = {
                    id: state.post[state.post.length - 1].id + 1,
                    message: state.tempPost, amountLikes: 0, amountDisLikes: 0
                };
                state.post.push(temp);
                state.tempPost = '';
                console.log("add: ", state.post);
            }
            return state
        default:
            return state;
    }
}