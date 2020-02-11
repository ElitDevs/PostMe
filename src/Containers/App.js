import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>Welcome to Post Me</h1>
        </div>
        <div className="App">
          <textarea
            className="postItem"
            defaultValue=""
            placeholder="write something ..."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default App;
