import React, { Component } from "react";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <button>
        {this.props.title} clicked {this.state.count}
      </button>
    );
  }
}

export default MyButton;
