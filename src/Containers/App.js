import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 style={{ textAlign: "center" }}>Welcome to Post Me</h1>
        </div>
        <textarea
          className="postItem"
          defaultValue=""
          placeholder="write something ..."
        ></textarea>
        <div className="controlButtons"></div>
      </div>
    );
  }
}

export default App;
