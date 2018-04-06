import { FETCH_POSTS, NEW_POST } from '../actions/types';


const initalState = {
    posts: [],
    post: null,
}

export default function(state = initalState, action) {
    switch(action.type) {
        case FETCH_POSTS: 
            return {
                ...state,
                posts: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                post: action.payload
            }
        default: 
            return state;
    }
}