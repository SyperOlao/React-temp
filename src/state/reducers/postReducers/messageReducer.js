import {ADD_POST, TEXT_ON_TEXTBOX} from "../../actions/actionsTypes";

const initialState = {
    tempPost: "",
    post: [{id: 1, message: "Первый пост", amountLikes: 42, amountDisLikes: 21},
        {id: 2, message: "Второй пост", amountLikes: 12, amountDisLikes: 17}],
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.tempPost !== '' && state.tempPost.trim()) {
                let temp = {
                    id: state.post[state.post.length - 1].id + 1,
                    message: state.tempPost, amountLikes: 0, amountDisLikes: 0
                };
                return {...state, post: [...state.post, temp], tempPost: ''}
            }
            return state;

        case TEXT_ON_TEXTBOX:
            return {...state, tempPost: action.text};
        default:
            return state;
    }
}