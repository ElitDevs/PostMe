import React, { Component } from "react";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.title}
        clicked {this.state.count} times
      </button>
    );
  }
}

export default MyButton;
