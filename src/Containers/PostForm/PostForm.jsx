import React, { Component } from 'react'

import PostHead from '../../Components/PostHead/PostHead'
import PostInput from '../../Components/PostInput/PostInput'
import PostControls from '../../Components/PostControls/PostControls'
import PostFoot from '../../Components/PostFoot/PostFoot'

import './PostForm.css'

export default class PostForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postInputBackground: "#ffffff"
    }
  }

  onBackgroundChange = (postInputBackground) => this.setState({ postInputBackground })

  render() {

    const { postInputBackground } = this.state

    return (
      <div className="postFormContainer">
        <PostHead />
        <PostInput background={postInputBackground} />
        <PostControls onBackgroundChange={this.onBackgroundChange} />
        <PostFoot />
      </div>
    )
  }
}
