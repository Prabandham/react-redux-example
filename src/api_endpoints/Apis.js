export const APIS = {
    "ALL_POSTS": 'https://jsonplaceholder.typicode.com/posts',
    "SINGLE_POST": function(post_id) {
        return `https://jsonplaceholder.typicode.com/posts/${post_id}`
    },
    "CREATE_POST": 'https://jsonplaceholder.typicode.com/posts',
}