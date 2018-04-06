import React, { Component } from 'react'

import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState({title: '', body: ''})
    }

    render() {
        return (
            <div>
                <h1> New Post</h1>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title :</label><br />
                        <input type='text' name='title' value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br />
                    <div>
                        <label>Body :</label><br />
                        <textarea name='body' value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.posts.post
});


export default connect(mapStateToProps, { createPost })(PostForm)