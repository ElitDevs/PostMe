import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  handleclick = id => {
    console.log("you clicked on :", id);
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1 style={{ textAlign: "center", color: "crimson" }}>
            Welcome to Post Me
          </h1>
        </div>
        <textarea
          className="postItem"
          defaultValue=""
          placeholder="write something ..."
        ></textarea>
        <div className="controlButtons">
          <div
            onClick={() => this.handleclick("id1")}
            className="postItemControl postItemColor1"
          ></div>
          <div
            onClick={() => this.handleclick("id2")}
            className="postItemControl postItemColor2"
          ></div>
          <div
            onClick={() => this.handleclick("id3")}
            className="postItemControl postItemColor3"
          ></div>
          <div
            onClick={() => this.handleclick("id4")}
            className="postItemControl postItemColor4"
          ></div>
          <div
            onClick={() => this.handleclick("id5")}
            className="postItemControl postItemColor5"
          ></div>
          <div
            onClick={() => this.handleclick("id6")}
            className="postItemControl postItemColor6"
          ></div>
          <div
            onClick={() => this.handleclick("id7")}
            className="postItemControl postItemColor7"
          ></div>
          <div
            onClick={() => this.handleclick("id8")}
            className="postItemControl postItemColor8"
          ></div>
          <div
            onClick={() => this.handleclick("id9")}
            className="postItemControl postItemColor9"
          ></div>
          <div
            onClick={() => this.handleclick("id10")}
            className="postItemControl postItemColor10"
          ></div>
          <div
            onClick={() => this.handleclick("id11")}
            className="postItemControl postItemColor11"
          ></div>
          <div
            onClick={this.handleclick.bind(this, "id12")}
            className="postItemControl postItemColor12"
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
