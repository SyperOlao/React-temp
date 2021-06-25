const {TEXT_ON_TEXTBOX} = require("../../actions/actionsTypes");

export const updateNewPostTextAction = (text) =>(
    {
        type:TEXT_ON_TEXTBOX,
        text: text
    }
);