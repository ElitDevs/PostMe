import React, { Component } from "react";
import "./PostItemControl.css";
export class PostItemControl extends Component {
  render() {
    const style = {
      backgroundColor: this.props.background
    };
    return <div className="postItemControl" style={style}></div>;
  }
}

export default PostItemControl;
