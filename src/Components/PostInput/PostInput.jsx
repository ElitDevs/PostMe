import React, { Component } from 'react'

import profilePicture from '../../Assets/images/profile-picture.jpg'
import emoji from '../../Assets/icons/emoji.svg'

import './PostInput.css'

export default class PostInput extends Component {

  constructor(props){
    super(props)
    this.state = { post: '' }
  }

  onPostChange = (e) => {
    const post = e.target.value
    this.setState({ post })
  }

  render() {

    const { post } = this.state
    
    return (
      <div className="postInputContainer">
        <div className="profilePicture">
          <img src={profilePicture} alt="profile" />
        </div>
        <div className="postInput">
          <textarea className="postTextarea" placeholder="Write something here..." value={post}  onChange={this.onPostChange} ></textarea>
        </div>
        <div className="emoji">
          <img src={emoji} alt="emoji" />
        </div>
      </div>  
    )
  }
}