import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PostForm from './PostForm';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const PostItems = this.props.posts.map(post => (
      // TODO move this to another component
      <div key={post.id}>
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <PostForm />
        <h1>All Posts</h1>
        <hr />
        {PostItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  newPost: state.posts.post
});

export default connect(mapStateToProps, { fetchPosts })(Posts)