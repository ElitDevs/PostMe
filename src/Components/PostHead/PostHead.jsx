import React, { Component } from 'react'

import edit from '../../Assets/icons/edit.svg'
import video from '../../Assets/icons/video.svg'
import close from '../../Assets/icons/close.svg'

import './PostHead.css'

export default class PostHead extends Component {

  constructor(props) {
    super(props)
    this.state = { isPost: true }
  }

  changePostType = (isPost) => this.setState({isPost})

  close = () => console.log("close form.")

  render() {
    const { isPost } = this.state
    return (
      <div className="postHeadContainer">
        <div onClick={() => this.changePostType(true)} className={`createPost ${isPost ? 'selected' :  ''}`}>
          <div className="icon">
            <img src={edit} alt='create post' />
          </div>
          <p className="title">
            Create a Post
          </p>
        </div>
        <div onClick={() => this.changePostType(false)} className={`photoVideo ${isPost ? '' :  'selected'}`}>
          <div className="icon">
            <img src={video} alt='album' />
          </div>
          <p className="title">
            Photo/Video Album
          </p>
        </div>
        <div className="close">
          <div className="icon" onClick={this.close}>
            <img src={close} alt='close form button' />
          </div>
        </div>
      </div>
    )
  }
}
