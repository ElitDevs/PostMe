import React, { Component } from "react"
import PostForm from "./PostForm/PostForm"

import "./App.css"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to Post Me</h1>
        </div>
        <PostForm />
      </div>
    );
  }
}

export default App