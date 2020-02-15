import React, { Component } from "react";
import MyButton from "../Components/MyButton";
import MyButtonDumb from "../Components/MyButtonDumb";
import MyPost from "../Components/myPost";
import Colors from "../Components/colors";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  //es2015
  // in es2015 arrow function give us the power to bind `this` without writing the bind method
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Welcome to React</h1>
        <MyButton title="baraka larbi" />
        <MyButtonDumb
          handleClick={this.handleClick}
          title="Title Component 02"
          count={this.state.count}
        />


        <div className="btn"> <MyPost /></div>
        <div className="btnSwitch"> <Colors /></div>
      </div>
    );
  }
}

export default App;
