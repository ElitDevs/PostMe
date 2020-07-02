import React, { Component } from "react"

import leftArrow from '../../Assets/icons/left-arrow.svg'
import photoIcon from '../../Assets/icons/photo.svg'
import feelingIcon from '../../Assets/icons/smile.svg'
import checkInIcon from '../../Assets/icons/pin.svg'
import tagIcon from '../../Assets/icons/tag.svg'
import stickerIcon from '../../Assets/icons/sticker.svg'

import "./PostControls.css"

export class PostControls extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bgIndex: 0
    }

    this.postBackgrounds = [
      "#FFFFFF",
      "#E2003B",
      "linear-gradient(to top right, #C91B58, #3F27A0)",
      "linear-gradient(to top right, #ED18F8, #522AC2)",
      "#4C92E4",
      "linear-gradient(to top right, #60E5A3, #24ABCA)",
      "linear-gradient(to top right, #CBE713, #2DB02A)",
      "#FF6422",
      "linear-gradient(to top, #B403AB, #F94E46, #F9C81D)",
      "linear-gradient(to top, #F2B6C4, #B31F4C, #201B57)",
      "linear-gradient(to top, #86E5F1, #7EE1DF)",
      "linear-gradient(to top, #B6054E, #FFBFB4)",
      "#606674",
      "#111111"
    ]
  }

  onBackgroundSelect = ( bgIndex ) => this.setState({ bgIndex })

  render() {

    const { bgIndex } = this.state
    return (
      <div className="postControlsContainer">
        <div className="postBackgroundsContainer">
          <div className="to-left">
            <img src={leftArrow} alt="left arrow" />
          </div>
          {
            this.postBackgrounds.map((background, index) => (
              <div 
                className={`postBackground ${index === bgIndex ? 'selected' : ''}`} 
                style={{ background }}
                onClick={() => this.onBackgroundSelect(index)}
                key={index}
                ></div>
            ))
          }
        </div>
        <div className="postOptions">
        <div className="option">
            <div className="icon">
              <img src={ photoIcon } alt='video' />
            </div>
            <p className="title">Photo/Video</p>
          </div>
          <div className="option">
            <div className="icon">
              <img src={ feelingIcon } alt='feeling and activity' />
            </div>
            <p className="title">Feeling/Activity</p>
          </div>
          <div className="option">
            <div className="icon">
              <img src={ checkInIcon } alt='check in' />
            </div>
            <p className="title">Check in</p>
          </div>
          <div className="option">
            <div className="icon">
              <img src={ tagIcon } alt='tag friends' />
            </div>
            <p className="title">Tag Friends</p>
          </div>
          <div className="option">
            <div className="icon">
              <img src={ stickerIcon } alt='sticker' />
            </div>
            <p className="title">Sticker</p>
          </div>
        </div>  
      </div>
    )
  }
}

export default PostControls