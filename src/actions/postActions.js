import { FETCH_POSTS, NEW_POST } from './types';
import {APIS} from '../api_endpoints/Apis';

export const fetchPosts = () => dispatch => {
    fetch(APIS.ALL_POSTS)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data,
        }));
}

export const createPost = (postData) => dispatch => {
        fetch(APIS.CREATE_POST, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => dispatch({
                type: NEW_POST,
                payload: data,
            }));
}