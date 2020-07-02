import React, { Component } from 'react'

import PostHead from '../../Components/PostHead/PostHead'
import PostInput from '../../Components/PostInput/PostInput'
import PostControls from '../../Components/PostControls/PostControls'
import PostFoot from '../../Components/PostFoot/PostFoot'

import './PostForm.css'

export default class PostForm extends Component {
  render() {
    return (
      <div className="postFormContainer">
        <PostHead />
        <PostInput />
        <PostControls />
        <PostFoot />
      </div>
    )
  }
}
