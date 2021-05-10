const {postPageReducer} = require("./postReducers/PostPageReducer");
const {combineReducers} = require("redux");


export let reducers = combineReducers({
        postPageReducer
});