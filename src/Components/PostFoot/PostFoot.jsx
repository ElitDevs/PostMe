import React, { Component } from 'react'

import lockIcon from '../../Assets/icons/lock.svg'

import './PostFoot.css'

export default class PostFoot extends Component {
  render() {
    return (
      <div className="postFootContainer">
        <div className="footButtons">
          <button className="privacy">
            <span className="icon">
              <img src={lockIcon} alt="lock" />
            </span>
            Only me
            <span className="caret"></span>
          </button>
          <button className="post">
            Post
          </button>
        </div>
      </div>
    )
  }
}