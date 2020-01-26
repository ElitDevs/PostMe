import React, { Component } from "react";

class MyButton extends Component {
  render() {
    return <button>{this.props.title}</button>;
  }
}

export default MyButton;
