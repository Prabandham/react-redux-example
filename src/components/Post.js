import React, { Component } from 'react'
import {APIS} from '../api_endpoints/Apis'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
    }
  }
  componentWillMount() {
    let id = this.props.match.params.id
    fetch(APIS.SINGLE_POST(id))
      .then(res => res.json())
      .then(data => this.setState({post: data}))
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <hr />
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}
