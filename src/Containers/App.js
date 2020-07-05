import React, { Component } from "react"
import PostForm from "./PostForm/PostForm"

import "./App.css"
class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="header">
          <h1>Welcome to Post Me</h1>
        </div>
        <div className="post-me">
          <PostForm />
        </div>
      </div>
    );
  }
}

export default App