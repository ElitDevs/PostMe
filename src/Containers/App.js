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
        <div className="controlButtons">
          <div className="postItemControl postItemColor1"></div>
          <div className="postItemControl postItemColor2"></div>
          <div className="postItemControl postItemColor3"></div>
          <div className="postItemControl postItemColor4"></div>
          <div className="postItemControl postItemColor5"></div>
          <div className="postItemControl postItemColor6"></div>
          <div className="postItemControl postItemColor7"></div>
          <div className="postItemControl postItemColor8"></div>
          <div className="postItemControl postItemColor9"></div>
          <div className="postItemControl postItemColor10"></div>
          <div className="postItemControl postItemColor11"></div>
          <div className="postItemControl postItemColor12"></div>
        </div>
      </div>
    );
  }
}

export default App;
